# Local Tool Showcase

这是一个中文静态网页项目，用来介绍 LocalSend、Stirling PDF、RustDesk、Ollama、Open WebUI、Dify、VS Code 等实用开源工具。

## 在线预览

GitHub Pages:

https://19979946080.github.io/first/

## 项目内容

- LocalSend：局域网文件互传工具
- Stirling PDF：本地 PDF 合并、压缩、转换、OCR 工具
- RustDesk：开源远程桌面工具
- Ollama：本地大模型运行工具
- Open WebUI：本地 AI 聊天网页界面
- GitHub Desktop：图形化 Git 和 GitHub 管理工具
- Dify：AI 应用和工作流搭建平台
- VS Code：网页开发和代码编辑器

## 功能亮点

- `tools.json` 数据驱动
- 工具搜索
- 分类筛选
- 工具收藏
- 收藏导出和导入
- 本机访问统计
- 热门工具排行
- 推荐指数、上手难度、适合人群
- 下载入口集合
- 教程详情区域
- 安装教程弹窗
- 轻量维护面板，方便查看 `tools.json`
- 本地后台版，可用表单维护工具数据并写回 `tools.json`
- 深色模式
- 响应式布局，支持手机浏览

## 本地预览

直接打开 `index.html` 即可。

如果要使用本地后台，需要启动本地服务器：

```bash
node local-admin-server.js
```

启动后打开：

```text
http://127.0.0.1:5178/admin.html
```

后台可以添加、编辑、复制、删除工具，并把数据保存回 `tools.json`。这个后台只适合本地使用，GitHub Pages 线上静态网站不能直接写文件。

## 文件结构

```text
tool-showcase/
  index.html
  styles.css
  script.js
  admin.html
  admin.css
  admin.js
  local-admin-server.js
  tools.json
  assets/
```

## 后续可以继续优化

- 加入更多工具分类
- 增加截图轮播
- 增加独立工具文章
- 增加真实后台管理和在线编辑
- 改造成个人作品集里的项目案例
