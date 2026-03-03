# 程权 - AI Product Architect | 个人名片

![个人名片预览](./assets/preview.png)

> 🎯 一个现代化的个人名片网页，集成视频作品集展示

🔗 **在线访问**: [https://yourusername.github.io/chengquan-card](https://yourusername.github.io/chengquan-card)

---

## ✨ 特性

- 🎨 **现代化设计** - 渐变背景 + 毛玻璃卡片效果
- 📱 **响应式布局** - 完美适配手机、平板、电脑
- 🎥 **视频作品集** - 集成3个AI项目演示视频
- 🚀 **快速加载** - 优化的静态网页，GitHub Pages 托管
- 📧 **一键联系** - 邮箱链接直达

---

## 🛠 技术栈

- HTML5 + CSS3 + JavaScript
- Font Awesome 图标
- GitHub Pages 部署

---

## 📂 项目结构

```
chengquan-card/
├── index.html              # 主页面
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # 交互脚本
├── assets/
│   ├── avatar.jpg         # 个人头像
│   └── videos/            # 作品集视频
│       ├── Openclaw_Open-notebook_demo.mp4
│       ├── RAG_knowledge_base.mp4
│       └── RAG_hallucination_elimination.mp4
├── proposal.md            # 项目提案
└── requirements.md        # 需求文档
```

---

## 🚀 部署指南

### 方式 1: GitHub Pages (推荐)

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 新建仓库 `chengquan-card`
   - 设为 Public

2. **上传代码**
   ```bash
   cd chengquan-card
   git remote add origin https://github.com/yourusername/chengquan-card.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" / "/ (root)"
   - 保存，等待几分钟

4. **访问网站**
   - 地址: `https://yourusername.github.io/chengquan-card`

### 方式 2: 本地预览

```bash
cd chengquan-card
python -m http.server 8000
# 访问 http://localhost:8000
```

---

## 📝 个性化修改

### 修改头像
替换 `assets/avatar.jpg` 为你的个人照片（建议 400x400px）

### 修改个人信息
编辑 `index.html`:
```html
<h1 class="name">程权</h1>
<p class="title">AI Product Architect</p>
<a href="mailto:cheng_imperial_london@outlook.com">...</a>
```

### 修改视频
替换 `assets/videos/` 目录下的视频文件，并更新 `index.html` 中的视频路径

### 修改技能标签
编辑 `index.html` 中的技能部分:
```html
<div class="skill-tags">
    <span class="tag">AI</span>
    <span class="tag">Python</span>
    <!-- 添加更多标签 -->
</div>
```

---

## 📞 联系方式

- 📧 邮箱: cheng_imperial_london@outlook.com
- 💼 LinkedIn: [你的LinkedIn链接]
- 🐱 GitHub: [你的GitHub链接]

---

## 📄 许可

MIT License © 2026 程权
