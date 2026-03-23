# MemMeow - 摩斯喵语转译器

一个可爱的摩斯电码与喵语互转工具，支持中文、英文和摩斯电码之间的双向转换。

## 项目结构

```
MemMeow/
├── data/            # 数据库文件存储目录
├── icons/           # SVG图标资源
├── index.html       # 主界面
├── welcome.html     # 欢迎引导页
├── history.html     # 转译历史
├── settings.html    # 系统设置
├── about.html       # 关于页面
├── declaration.html # 声明页面
├── lang.js          # 语言本地化
├── db.js            # 数据库管理
├── preload.js       # 预加载脚本
├── renderer.js      # 渲染进程逻辑
├── index.js         # Electron主进程
├── package.json     # 项目配置
└── README.md        # 项目说明
```

## 功能特点

- 多语言支持：中文、英文界面切换
- 主题切换：浅色/深色模式
- 双向转换：文本 ↔ 摩斯电码 ↔ 喵语
- 历史记录：保存转译历史，支持复制和删除
- 智能识别：自动检测输入类型
- 响应式设计：适配不同屏幕尺寸
- 现代化界面：采用Google Material Design风格
- 加载动画：转换过程中显示流畅的加载动画
- 清空输入：一键清空输入和输出内容
- SQLite存储：使用SQLite数据库持久化存储数据
- 毛玻璃效果：现代化的毛玻璃透明效果
- 自定义提示框：替换浏览器默认弹窗，使用美观的自定义提示框

## 快速开始

### 环境要求

- Node.js 14.0+
- npm 6.0+

### 安装依赖

```bash
npm install
```

### 运行项目

```bash
npm start
```

### 构建应用

```bash
npm run build
```

## 使用方法

1. **首次启动**：会显示欢迎引导页，选择语言和主题
2. **主界面**：在输入框中输入文本、摩斯电码或喵语
3. **转换**：点击转换按钮，转换过程中会显示加载动画
4. **清空输入**：点击输入区域的"清空"按钮，一键清空输入和输出内容
5. **复制结果**：点击复制按钮复制转换结果
6. **查看历史**：点击导航栏的"转译历史"查看历史记录
7. **调整设置**：点击导航栏的"系统设置"调整应用设置，包括毛玻璃效果开关

## 转换规则

### 文本 → 摩斯电码
- 字母A-Z和数字0-9会被转换为对应的摩斯电码
- 汉字会先转换为拼音，再转换为摩斯电码

### 摩斯电码 → 文本
- 摩斯电码会被转换为对应的字母、数字
- 支持标准摩斯电码格式

### 摩斯电码 ↔ 喵语
- 摩斯点（.） → 喵
- 摩斯划（-） → 呜
- 分隔符（/） → ……

## 数据库存储

项目使用SQLite3数据库进行数据持久化存储：

- **设置存储**：语言、主题、转译规则等设置
- **历史记录**：保存转译历史，支持无限条记录
- **数据安全**：本地存储，数据不会上传到任何服务器

## 项目亮点

- **现代化界面**：采用毛玻璃效果和流畅的动画，提供出色的视觉体验
- **用户友好**：直观的操作界面，即使是初学者也能轻松使用
- **功能丰富**：支持多种转换模式和自定义设置
- **数据持久**：使用SQLite数据库确保数据安全存储
- **跨平台**：基于Electron，可在Windows、macOS和Linux上运行
- **开源免费**：采用MIT许可证，完全开源免费使用

## 界面预览

### 主界面
![主界面](image/屏幕截图%202026-03-17%20214754.webp)

### 深色模式
![深色模式](image/屏幕截图%202026-03-17%20214938.webp)

## 技术栈

- **前端**：HTML5, CSS3, JavaScript
- **桌面框架**：Electron
- **数据库**：SQLite3
- **图标**：SVG图标
- **本地化**：自定义语言切换

## 许可证

本项目采用 MIT 许可证开源。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式
- QQ：483165474
---

**MemMeow** - 让摩斯电码变得更有趣！

<div align="center">
<strong>

# 版权与搬运声明
本项目仅在 GitHub 或 Gitee 官方仓库发布，未经作者明确书面授权，禁止任何平台、个人或组织以自动抓取、批量镜像、强制收录、篡改信息、伪造账号等方式搬运至第三方平台。违者将保留追究法律责任的权利。

# Copyright & Redistribution Notice
This project is officially released only on GitHub or Gitee.
Without the author's express written permission, any platform, individual or organization is prohibited from crawling, mirroring in batches, forced inclusion, tampering with information, forging accounts, or other means of redistributing this project to third-party platforms.
The author reserves the right to pursue legal liability for violations.

---
禁止 GitCode 自动爬取、搬运、镜像 / GitCode crawling is forbidden
</strong>
</div>