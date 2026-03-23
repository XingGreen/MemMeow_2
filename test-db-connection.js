const db = require('./db');

async function testDatabase() {
    console.log('Testing database connection...');
    
    try {
        // 初始化数据库
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 测试添加历史记录
        console.log('Testing addHistory...');
        await db.addHistory('test input', 'test output', 'test type');
        console.log('History added successfully');
        
        // 测试获取历史记录
        console.log('Testing getHistory...');
        const history = await db.getHistory();
        console.log('History length:', history.length);
        console.log('History:', history);
        
        // 测试saveHistory设置
        console.log('Testing getSetting...');
        const saveHistory = await db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistory);
        
        console.log('All tests passed!');
    } catch (error) {
        console.error('Error during testing:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testDatabase();