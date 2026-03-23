const { app, BrowserWindow } = require('electron');
const path = require('path');
const db = require('./db');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
    title: '摩斯喵语转译器',
    icon: path.join(__dirname, 'favicon.ico')
  });

  mainWindow.loadFile('index.html');

  // 打开开发者工具（可选）
  //mainWindow.webContents.openDevTools();
//}

app.whenReady().then(async () => {
  try {
    // 初始化数据库
    console.log('Initializing database...');
    await db.initDatabase();
    console.log('Database initialized successfully');
    
    // 数据库初始化完成后再创建窗口
    console.log('Creating window...');
    createWindow();
  } catch (error) {
    console.error('Error initializing database:', error);
    // 即使数据库初始化失败，也创建窗口
    createWindow();
  }

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  // 关闭数据库连接
  db.closeDatabase().catch(err => {
    console.error('Error closing database:', err);
  });
  
  if (process.platform !== 'darwin') app.quit();
});
