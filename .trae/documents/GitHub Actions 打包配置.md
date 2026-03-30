# GitHub Actions 打包配置

## 目标
创建一个 GitHub Actions 工作流，用于自动构建和打包 Electron 应用为 Windows 安装包。

## 步骤

1. **创建 GitHub Actions 工作流文件**
   - 在 `.github/workflows/` 目录下创建 `build.yml` 文件
   - 配置工作流触发条件（推送或 PR）
   - 设置运行环境为 Windows

2. **配置工作流步骤**
   - 检出代码
   - 设置 Node.js 环境
   - 安装依赖
   - 构建应用
   - 上传构建产物

3. **工作流配置详情**
   - 使用 `actions/checkout@v4` 检出代码
   - 使用 `actions/setup-node@v4` 设置 Node.js 版本
   - 运行 `npm install` 安装依赖
   - 运行 `npm run build` 构建应用
   - 使用 `actions/upload-artifact@v4` 上传构建产物

## 预期结果
- 当代码推送到仓库或创建 PR 时，GitHub Actions 会自动构建应用
- 构建完成后，会生成 Windows 安装包
- 构建产物会作为工作流的 artifact 上传，用户可以下载使用

## 优势
- 避免了本地环境的权限问题
- 提供了可重现的构建过程
- 自动化构建，节省时间和精力