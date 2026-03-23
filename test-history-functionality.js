const db = require('./db');

// 测试历史记录功能
async function testHistoryFunctionality() {
    console.log('Testing history functionality...');
    
    try {
        // 初始化数据库
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 测试添加历史记录
        console.log('Adding history record...');
        const testInput = 'Test Input';
        const testOutput = 'Test Output';
        const testType = 'Test Type';
        
        await db.addHistory(testInput, testOutput, testType);
        console.log('History record added successfully');
        
        // 测试获取历史记录
        console.log('Getting history records...');
        const history = await db.getHistory();
        console.log('History length:', history.length);
        console.log('History records:', history);
        
        // 测试保存历史记录设置
        console.log('Checking saveHistory setting...');
        const saveHistorySetting = await db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistorySetting);
        
        if (history.length > 0 && saveHistorySetting === 'true') {
            console.log('✅ History functionality test passed!');
        } else {
            console.log('❌ History functionality test failed!');
        }
        
    } catch (error) {
        console.error('Error during history functionality test:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testHistoryFunctionality();