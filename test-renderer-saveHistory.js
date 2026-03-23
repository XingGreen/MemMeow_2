// 模拟渲染进程环境
const db = require('./db');

// 模拟window.db对象
const window = {
    db: {
        getSetting: db.getSetting,
        addHistory: db.addHistory,
        getHistory: db.getHistory,
        deleteHistory: db.deleteHistory
    }
};

// 复制saveHistory函数
async function saveHistory(input, output, type) {
    try {
        console.log('Saving history...');
        console.log('Input:', input);
        console.log('Output:', output);
        console.log('Type:', type);
        
        const saveHistory = await window.db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistory);
        
        if (saveHistory !== 'true') {
            console.log('saveHistory is not true, skipping');
            return;
        }
        
        console.log('Calling addHistory...');
        await window.db.addHistory(input, output, type);
        console.log('addHistory completed');
        
        // 限制历史记录数量为50条
        const history = await window.db.getHistory();
        console.log('History length after add:', history.length);
        
        if (history.length > 50) {
            console.log('History length exceeds 50, deleting oldest records');
            // 删除最旧的记录
            for (let i = 50; i < history.length; i++) {
                await window.db.deleteHistory(history[i].id);
            }
            console.log('Oldest records deleted');
        }
        console.log('Save history completed');
    } catch (error) {
        console.error('Error saving history:', error);
    }
}

// 测试saveHistory函数
async function testRendererSaveHistory() {
    console.log('Testing renderer saveHistory function...');
    
    try {
        // 初始化数据库
        await db.initDatabase();
        console.log('Database initialized successfully');
        
        // 测试saveHistory函数
        await saveHistory('Test Input', 'Test Output', 'Test Type');
        
        // 检查历史记录
        const history = await db.getHistory();
        console.log('Final history length:', history.length);
        console.log('Final history:', history);
        
    } catch (error) {
        console.error('Error during testing:', error);
    } finally {
        // 关闭数据库连接
        await db.closeDatabase();
        console.log('Database connection closed');
    }
}

testRendererSaveHistory();