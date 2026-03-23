const db = require('./db');

// 模拟用户在首页进行转译操作
async function testUserFlow() {
    console.log('Testing user flow...');
    
    try {
        // 初始化数据库
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 模拟用户输入
        const userInput = 'Hello World';
        console.log('User input:', userInput);
        
        // 模拟转译过程
        console.log('Converting to Morse code...');
        // 这里可以添加实际的转译逻辑
        const output = '.... . .-.. .-.. --- / .-- --- .-. .-.. -..';
        console.log('Conversion output:', output);
        
        // 模拟保存历史记录
        console.log('Saving history...');
        await db.addHistory(userInput, output, '摩斯电码');
        console.log('History saved successfully');
        
        // 检查历史记录
        console.log('Checking history...');
        const history = await db.getHistory();
        console.log('History length:', history.length);
        console.log('History records:', history);
        
        if (history.length > 0) {
            console.log('✅ User flow test passed! History is being recorded.');
        } else {
            console.log('❌ User flow test failed! History is not being recorded.');
        }
        
    } catch (error) {
        console.error('Error during user flow test:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testUserFlow();