# MemMeow - 摩斯喵语转译器

一个可爱的摩斯电码与喵语互转工具，支持中文、英文和摩斯电码之间的双向转换。

## 项目结构

```
MemMeow/
├── icons/           # SVG图标资源
├── index.html       # 主界面
├── welcome.html     # 欢迎引导页
├── history.html     # 转译历史
├── settings.html    # 系统设置
├── about.html       # 关于页面
├── declaration.html # 声明页面
├── lang.js          # 语言本地化
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
3. **转换**：点击转换按钮或按Enter键进行转换
4. **复制结果**：点击复制按钮复制转换结果
5. **查看历史**：点击导航栏的"转译历史"查看历史记录
6. **调整设置**：点击导航栏的"系统设置"调整应用设置

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

## 界面预览

### 主界面
![主界面](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20desktop%20application%20interface%20for%20Morse%20code%20translator%20with%20cat%20theme%2C%20light%20mode%2C%20clean%20UI%20design&image_size=landscape_16_9)

### 深色模式
![深色模式](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20desktop%20application%20interface%20for%20Morse%20code%20translator%20with%20cat%20theme%2C%20dark%20mode%2C%20clean%20UI%20design&image_size=landscape_16_9)

## 技术栈

- **前端**：HTML5, CSS3, JavaScript
- **桌面框架**：Electron
- **字体**：Roboto (Google Material Design)
- **图标**：SVG图标
- **本地化**：自定义语言切换

## 许可证

本项目采用 MIT 许可证开源。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

- 项目地址：[https://github.com/XingGreen/MemMeow_2](https://github.com/XingGreen/MemMeow_2)

---

**MemMeow** - 让摩斯电码变得更有趣！