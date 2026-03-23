const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 数据库文件路径
const dbPath = path.join(__dirname, 'data', 'memmeow.db');

// 创建数据库连接
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        return;
    }
    console.log('Connected to the database.');
    
    // 检查saveHistory设置
    db.get('SELECT value FROM settings WHERE key = ?', ['saveHistory'], (err, row) => {
        if (err) {
            console.error('Error getting saveHistory setting:', err.message);
            db.close();
            return;
        }
        console.log('saveHistory setting:', row ? row.value : 'Not set');
        
        // 如果没有设置，插入默认值
        if (!row) {
            db.run('INSERT INTO settings (key, value) VALUES (?, ?)', ['saveHistory', 'true'], (err) => {
                if (err) {
                    console.error('Error setting saveHistory to true:', err.message);
                } else {
                    console.log('Set saveHistory to true');
                }
                db.close();
            });
        } else {
            db.close();
        }
    });
});
