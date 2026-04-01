// 打开简历预览
function openResume() {
    const modal = document.getElementById('resume-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭简历预览
function closeResume() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 视频配置
const videos = [
    {
        src: 'assets/videos/Openclaw_Open-notebook_demo.mp4',
        title: 'Openclaw+Open-notebook 知识库读取文献演示'
    },
    {
        src: 'assets/videos/RAG_knowledge_base.mp4',
        title: 'RAG 知识库系统'
    },
    {
        src: 'assets/videos/RAG_hallucination_elimination.mp4',
        title: 'OpenClaw 自动化：企业知识库 + 飞书进度对齐'
    }
];

// 打开视频
function openVideo(index) {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-player');
    const title = document.getElementById('video-title');
    
    player.src = videos[index].src;
    title.textContent = videos[index].title;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 自动播放
    player.play().catch(e => console.log('自动播放被阻止'));
}

// 关闭视频
function closeVideo() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-player');
    
    player.pause();
    player.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 显示微信弹窗
function showWeChat() {
    const modal = document.getElementById('wechat-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭微信弹窗
function closeWeChat() {
    const modal = document.getElementById('wechat-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 点击弹窗外部关闭
document.addEventListener('click', function(e) {
    const videoModal = document.getElementById('video-modal');
    const wechatModal = document.getElementById('wechat-modal');
    const resumeModal = document.getElementById('resume-modal');
    
    if (e.target === videoModal) {
        closeVideo();
    }
    if (e.target === wechatModal) {
        closeWeChat();
    }
    if (e.target === resumeModal) {
        closeResume();
    }
});

// ESC 键关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideo();
        closeWeChat();
        closeResume();
    }
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动显示动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 观察视频卡片
    document.querySelectorAll('.video-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// 复制邮箱功能
function copyEmail() {
    const email = 'cheng_imperial_london@outlook.com';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('邮箱已复制！');
        });
    } else {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('邮箱已复制！');
    }
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #48bb78;
        color: white;
        padding: 15px 30px;
        border-radius: 30px;
        font-size: 14px;
        z-index: 2000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2500);
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🎉 程权个人名片网站已加载！');
console.log('📧 联系邮箱：cheng_imperial_london@outlook.com');
