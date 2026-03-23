const db = require('./db');

// 模拟完整的应用程序流程
async function testCompleteFlow() {
    console.log('Testing complete application flow...');
    
    try {
        // 1. 初始化数据库
        console.log('1. Initializing database...');
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 2. 检查数据库结构
        console.log('2. Checking database structure...');
        // 这里可以添加数据库结构检查代码
        
        // 3. 检查saveHistory设置
        console.log('3. Checking saveHistory setting...');
        const saveHistorySetting = await db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistorySetting);
        
        // 4. 测试添加历史记录
        console.log('4. Testing addHistory...');
        const testInput = 'Hello MemMeow';
        const testOutput = '.... . .-.. .-.. --- / -- . . -- . -- --- .--';
        const testType = '摩斯电码';
        
        await db.addHistory(testInput, testOutput, testType);
        console.log('History added successfully');
        
        // 5. 测试获取历史记录
        console.log('5. Testing getHistory...');
        const history = await db.getHistory();
        console.log('History length:', history.length);
        console.log('History records:', history);
        
        // 6. 测试saveHistory函数
        console.log('6. Testing saveHistory function...');
        // 模拟saveHistory函数
        async function saveHistory(input, output, type) {
            try {
                const saveHistory = await db.getSetting('saveHistory', 'true');
                if (saveHistory === 'true') {
                    await db.addHistory(input, output, type);
                    console.log('saveHistory: History saved successfully');
                } else {
                    console.log('saveHistory: saveHistory is not enabled');
                }
            } catch (error) {
                console.error('saveHistory: Error saving history:', error);
            }
        }
        
        // 测试saveHistory函数
        await saveHistory('Test Input 2', 'Test Output 2', 'Test Type 2');
        
        // 7. 再次获取历史记录
        console.log('7. Getting history after saveHistory...');
        const historyAfterSave = await db.getHistory();
        console.log('History length after save:', historyAfterSave.length);
        console.log('History records after save:', historyAfterSave);
        
        console.log('\n=== Test Summary ===');
        console.log('Database initialized:', true);
        console.log('saveHistory setting:', saveHistorySetting);
        console.log('Initial history length:', history.length);
        console.log('Final history length:', historyAfterSave.length);
        console.log('History records added:', historyAfterSave.length - history.length);
        
        if (historyAfterSave.length > history.length) {
            console.log('✅ Test passed! History is being recorded.');
        } else {
            console.log('❌ Test failed! History is not being recorded.');
        }
        
    } catch (error) {
        console.error('Error during test:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testCompleteFlow();