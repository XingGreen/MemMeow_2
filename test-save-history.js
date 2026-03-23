const db = require('./db');

async function testSaveHistory() {
    console.log('Testing saveHistory functionality...');
    
    try {
        // 初始化数据库
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 模拟转译过程
        const input = 'Hello World';
        const output = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
        const type = '摩斯电码';
        
        console.log('Testing saveHistory with input:', input);
        console.log('Expected output:', output);
        console.log('Type:', type);
        
        // 检查saveHistory设置
        const saveHistorySetting = await db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistorySetting);
        
        if (saveHistorySetting === 'true') {
            console.log('Adding history...');
            await db.addHistory(input, output, type);
            console.log('History added successfully');
            
            // 获取历史记录
            const history = await db.getHistory();
            console.log('History length after add:', history.length);
            console.log('History:', history);
            
            if (history.length > 0) {
                console.log('saveHistory functionality is working correctly!');
            } else {
                console.error('History was not added');
            }
        } else {
            console.error('saveHistory setting is not enabled');
        }
        
    } catch (error) {
        console.error('Error during testing:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testSaveHistory();