const path = require('path');
const fs = require('fs');

// 确保数据目录存在
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 数据库文件路径
const dbPath = path.join(dataDir, 'memmeow.json');

// 创建数据库实例
let db;
let initialized = false;

// 初始化数据库
function initDatabase() {
    return new Promise(async (resolve, reject) => {
        if (initialized) {
            console.log('Database already initialized');
            resolve();
            return;
        }
        
        try {
            // 动态导入 lowdb 预设
            const { JSONFileSyncPreset } = await import('lowdb/node');
            
            // 创建数据库实例
            db = JSONFileSyncPreset(dbPath, {
                settings: {},
                translation_history: []
            });
            
            initialized = true;
            console.log('Database initialized successfully');
            resolve();
        } catch (err) {
            console.error('Error initializing database:', err.message);
            reject(err);
        }
    });
}

// 获取设置
function getSetting(key, defaultValue) {
    return new Promise((resolve) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            resolve(defaultValue);
            return;
        }
        
        const value = db.data.settings[key];
        resolve(value !== undefined ? value : defaultValue);
    });
}

// 设置设置
function setSetting(key, value) {
    return new Promise((resolve, reject) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        
        try {
            db.data.settings[key] = value;
            db.write();
            resolve();
        } catch (err) {
            console.error('Error setting setting:', err.message);
            reject(err);
        }
    });
}

// 获取所有历史记录
function getHistory() {
    return new Promise((resolve) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            resolve([]);
            return;
        }
        
        // 按 ID 降序排序
        const history = db.data.translation_history.sort((a, b) => b.id - a.id);
        resolve(history);
    });
}

// 添加历史记录
function addHistory(input, output, type) {
    return new Promise((resolve, reject) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        
        try {
            const timestamp = new Date().toLocaleString();
            // 生成新的 ID
            const lastId = db.data.translation_history.length > 0 
                ? Math.max(...db.data.translation_history.map(item => item.id)) 
                : 0;
            
            const newHistory = {
                id: lastId + 1,
                input,
                output,
                type,
                timestamp
            };
            
            db.data.translation_history.push(newHistory);
            db.write();
            resolve();
        } catch (err) {
            console.error('Error adding history:', err.message);
            reject(err);
        }
    });
}

// 清空历史记录
function clearHistory() {
    return new Promise((resolve, reject) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        
        try {
            db.data.translation_history = [];
            db.write();
            resolve();
        } catch (err) {
            console.error('Error clearing history:', err.message);
            reject(err);
        }
    });
}

// 删除历史记录
function deleteHistory(id) {
    return new Promise((resolve, reject) => {
        if (!db || !initialized) {
            console.error('Database not initialized');
            reject(new Error('Database not initialized'));
            return;
        }
        
        try {
            const initialLength = db.data.translation_history.length;
            db.data.translation_history = db.data.translation_history.filter(item => item.id !== id);
            
            // 只有当数据实际发生变化时才写入
            if (db.data.translation_history.length !== initialLength) {
                db.write();
            }
            
            resolve();
        } catch (err) {
            console.error('Error deleting history:', err.message);
            reject(err);
        }
    });
}

// 关闭数据库连接
function closeDatabase() {
    return new Promise((resolve) => {
        // lowdb 不需要显式关闭连接
        resolve();
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