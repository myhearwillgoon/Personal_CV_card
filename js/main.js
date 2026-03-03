// 微信弹窗控制
function showWeChat() {
    const modal = document.getElementById('wechat-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWeChat() {
    const modal = document.getElementById('wechat-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('wechat-modal');
    if (event.target === modal) {
        closeWeChat();
    }
}

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 添加技能标签逐个显示的动画
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        setTimeout(() => {
            tag.style.transition = 'all 0.3s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 复制到剪贴板功能（可选）
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('已复制到剪贴板');
        });
    } else {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('已复制到剪贴板');
    }
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 9999;
        animation: fadeInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}
