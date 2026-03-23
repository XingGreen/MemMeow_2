// 预加载脚本
const db = require('./db');

// 初始化数据库
async function initDb() {
    try {
        console.log('Initializing database in preload...');
        await db.initDatabase();
        console.log('Database initialized in preload successfully');
    } catch (error) {
        console.error('Error initializing database in preload:', error);
    }
}

// 暴露数据库操作函数给渲染进程
window.db = {
    getSetting: db.getSetting,
    setSetting: db.setSetting,
    getHistory: db.getHistory,
    addHistory: db.addHistory,
    clearHistory: db.clearHistory,
    deleteHistory: db.deleteHistory,
    initDatabase: db.initDatabase
};

// 测试数据库连接
console.log('Preload script loaded');
console.log('Database functions exposed:', window.db);

// 初始化数据库
initDb().then(() => {
    // 测试getHistory函数
    window.db.getHistory().then(history => {
        console.log('Test getHistory:', history);
    }).catch(error => {
        console.error('Error testing getHistory:', error);
    });
});

