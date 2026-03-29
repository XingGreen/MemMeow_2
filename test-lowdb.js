const db = require('./db');

async function testDatabase() {
    console.log('开始测试 lowdb 数据库...');
    
    try {
        // 初始化数据库
        console.log('1. 初始化数据库');
        await db.initDatabase();
        console.log('数据库初始化成功');
        
        // 测试设置功能
        console.log('\n2. 测试设置功能');
        await db.setSetting('test_key', 'test_value');
        console.log('设置保存成功');
        
        const settingValue = await db.getSetting('test_key', 'default_value');
        console.log('获取设置值:', settingValue);
        
        // 测试历史记录功能
        console.log('\n3. 测试历史记录功能');
        await db.addHistory('测试输入', '测试输出', 'test_type');
        console.log('历史记录添加成功');
        
        const history = await db.getHistory();
        console.log('获取历史记录:', history);
        
        // 测试删除历史记录
        if (history.length > 0) {
            console.log('\n4. 测试删除历史记录');
            await db.deleteHistory(history[0].id);
            console.log('历史记录删除成功');
            
            const updatedHistory = await db.getHistory();
            console.log('删除后历史记录:', updatedHistory);
        }
        
        // 测试清空历史记录
        console.log('\n5. 测试清空历史记录');
        await db.clearHistory();
        console.log('历史记录清空成功');
        
        const emptyHistory = await db.getHistory();
        console.log('清空后历史记录:', emptyHistory);
        
        // 关闭数据库
        console.log('\n6. 关闭数据库');
        await db.closeDatabase();
        console.log('数据库关闭成功');
        
        console.log('\n所有测试完成，数据库功能正常！');
    } catch (error) {
        console.error('测试过程中出现错误:', error);
    }
}

testDatabase();