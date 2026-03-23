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
    
    // 测试添加历史记录
    const input = 'Hello World';
    const output = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
    const type = '摩斯电码';
    const timestamp = new Date().toLocaleString();
    
    db.run(
        'INSERT INTO translation_history (input, output, type, timestamp) VALUES (?, ?, ?, ?)',
        [input, output, type, timestamp],
        (err) => {
            if (err) {
                console.error('Error adding history:', err.message);
                db.close();
                return;
            }
            console.log('Added test history record.');
            
            // 检查历史记录
            db.all('SELECT * FROM translation_history ORDER BY id DESC;', (err, rows) => {
                if (err) {
                    console.error('Error getting history:', err.message);
                    db.close();
                    return;
                }
                console.log('\nHistory records:');
                console.log(rows);
                
                db.close();
            });
        }
    );
});
