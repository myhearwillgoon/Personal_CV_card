# 程权 - 个人名片网站

一个精美的个人名片网页，使用纯 HTML/CSS/JavaScript 构建，部署在 GitHub Pages 上。

## 🌐 在线访问

访问地址：`https://<你的用户名>.github.io/chengquan-card`

## 📋 项目介绍

这是一个响应式的个人名片网站，包含以下功能：

- 🎨 精美的渐变设计风格
- 📱 完全响应式布局（适配手机、平板、桌面）
- 📧 联系方式展示（邮箱、GitHub、微信、简历）
- 🏷️ 技能标签展示
- ✨ 流畅的动画效果
- 📄 PDF 简历下载

## 🚀 部署说明

本项目使用 **GitHub Actions** 自动部署到 GitHub Pages。

### 首次部署步骤

1. **Fork 或克隆此仓库** 到你的 GitHub 账号

2. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages"，文件夹选择 "/ (root)"
   - 点击 Save

3. **配置 GitHub Actions 权限**
   - 进入 Settings → Actions → General
   - 找到 "Workflow permissions"
   - 选择 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"
   - 点击 Save

4. **触发首次部署**
   - 对仓库进行任意修改（如修改 README），或
   - 进入 Actions 标签页，手动运行 "Deploy to GitHub Pages" 工作流

5. **访问网站**
   - 等待几分钟让部署完成
   - 访问 `https://<你的用户名>.github.io/chengquan-card`

### 自定义域名（可选）

如果你想使用自定义域名（如 `card.yourdomain.com`）：

1. 创建 `CNAME` 文件：
   ```bash
   echo "card.yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. 在你的域名服务商处添加 DNS 记录：
   - 类型：CNAME
   - 主机：card（或你想要的子域名）
   - 值：`<你的用户名>.github.io`

3. 在 GitHub 仓库中：
   - 进入 Settings → Pages
   - 在 "Custom domain" 处填入你的域名
   - 勾选 "Enforce HTTPS"（推荐）

## 📝 个性化修改指南

### 修改个人信息

编辑 `index.html` 文件：

```html
<!-- 修改姓名 -->
<h1 class="name">程权</h1>

<!-- 修改职位 -->
<p class="title">全栈开发工程师 / 技术顾问</p>

<!-- 修改个人简介 -->
<p class="bio">热爱技术，专注于 Web 开发和系统架构设计...</p>

<!-- 修改联系方式 -->
<a href="mailto:你的邮箱@example.com">...</a>
<a href="https://github.com/你的用户名">...</a>
```

### 修改技能标签

在 `index.html` 中找到以下部分，添加或修改标签：

```html
<div class="skills-tags">
    <span class="tag">JavaScript</span>
    <span class="tag">TypeScript</span>
    <!-- 添加你的技能 -->
    <span class="tag">你的技能</span>
</div>
```

### 更换头像

你可以：

1. **使用图片**：将图片放入 `assets` 文件夹，修改 CSS：
   ```css
   .avatar {
       background: url('assets/your-photo.jpg') center/cover;
   }
   .avatar span {
       display: none;
   }
   ```

2. **使用 Gravatar**：
   ```css
   .avatar {
       background: url('https://www.gravatar.com/avatar/你的邮箱哈希值') center/cover;
   }
   ```

### 修改主题颜色

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #3498db;    /* 主色调 */
    --secondary-color: #2c3e50;  /* 次要色调 */
    --accent-color: #e74c3c;     /* 强调色 */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* 背景渐变 */
}
```

### 更换背景

```css
body {
    background: url('assets/background.jpg') no-repeat center center fixed;
    background-size: cover;
}
```

## 📁 项目结构

```
chengquan-card/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── assets/
│   └── videos/                 # 视频资源
├── css/
│   └── style.css               # 样式文件
├── js/
│   └── main.js                 # JavaScript 文件
├── index.html                  # 主页面
├── resume.pdf                  # 简历文件
├── README.md                   # 本文件
└── CNAME                       # 自定义域名（可选）
```

## 🔧 本地开发

```bash
# 克隆仓库
git clone https://github.com/<你的用户名>/chengquan-card.git
cd chengquan-card

# 使用 Python 简单服务器预览
python -m http.server 8000

# 或使用 Node.js
npx serve

# 然后访问 http://localhost:8000
```

## 📝 更新日志

### 2024-03-03
- ✨ 初始版本发布
- 🎨 完成响应式设计
- 🚀 配置 GitHub Actions 自动部署

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

Made with ❤️ by 程权
