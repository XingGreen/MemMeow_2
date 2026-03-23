const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// 确保数据目录存在
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 数据库文件路径
const dbPath = path.join(dataDir, 'memmeow.db');

// 创建数据库连接
let db;
let initialized = false;

// 初始化数据库
function initDatabase() {
    return new Promise((resolve, reject) => {
        if (initialized) {
            console.log('Database already initialized');
            resolve();
            return;
        }
        
        db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
                reject(err);
                return;
            }
            
            // 创建设置表
            db.run(`
                CREATE TABLE IF NOT EXISTS settings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    key TEXT UNIQUE NOT NULL,
                    value TEXT NOT NULL
                )
            `, (err) => {
                if (err) {
                    console.error('Error creating settings table:', err.message);
                    reject(err);
                    return;
                }
                
                // 创建历史记录表
                db.run(`
                    CREATE TABLE IF NOT EXISTS translation_history (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        input TEXT NOT NULL,
                        output TEXT NOT NULL,
                        type TEXT NOT NULL,
                        timestamp TEXT NOT NULL
                    )
                `, (err) => {
                    if (err) {
                        console.error('Error creating history table:', err.message);
                        reject(err);
                        return;
                    }
                    
                    initialized = true;
                    console.log('Database initialized successfully');
                    resolve();
                });
            });
        });
    });
}

// 获取设置
function getSetting(key, defaultValue) {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            resolve(defaultValue);
            return;
        }
        db.get('SELECT value FROM settings WHERE key = ?', [key], (err, row) => {
            if (err) {
                console.error('Error getting setting:', err.message);
                resolve(defaultValue);
                return;
            }
            resolve(row ? row.value : defaultValue);
        });
    });
}

// 设置设置
function setSetting(key, value) {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        db.run(
            'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
            [key, value],
            (err) => {
                if (err) {
                    console.error('Error setting setting:', err.message);
                    reject(err);
                    return;
                }
                resolve();
            }
        );
    });
}

// 获取所有历史记录
function getHistory() {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            resolve([]);
            return;
        }
        db.all(
            'SELECT * FROM translation_history ORDER BY id DESC',
            (err, rows) => {
                if (err) {
                    console.error('Error getting history:', err.message);
                    resolve([]);
                    return;
                }
                resolve(rows);
            }
        );
    });
}

// 添加历史记录
function addHistory(input, output, type) {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        const timestamp = new Date().toLocaleString();
        db.run(
            'INSERT INTO translation_history (input, output, type, timestamp) VALUES (?, ?, ?, ?)',
            [input, output, type, timestamp],
            (err) => {
                if (err) {
                    console.error('Error adding history:', err.message);
                    reject(err);
                    return;
                }
                resolve();
            }
        );
    });
}

// 清空历史记录
function clearHistory() {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        db.run('DELETE FROM translation_history', (err) => {
            if (err) {
                console.error('Error clearing history:', err.message);
                reject(err);
                return;
            }
            resolve();
        });
    });
}

// 删除历史记录
function deleteHistory(id) {
    return new Promise((resolve, reject) => {
        if (!db) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        db.run('DELETE FROM translation_history WHERE id = ?', [id], (err) => {
            if (err) {
                console.error('Error deleting history:', err.message);
                reject(err);
                return;
            }
            resolve();
        });
    });
}

// 关闭数据库连接
function closeDatabase() {
    return new Promise((resolve, reject) => {
        if (db) {
            db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err.message);
                    reject(err);
                    return;
                }
                resolve();
            });
        } else {
            resolve();
        }
    });
}

module.exports = {
    initDatabase,
    getSetting,
    setSetting,
    getHistory,
    addHistory,
    clearHistory,
    deleteHistory,
    closeDatabase
};