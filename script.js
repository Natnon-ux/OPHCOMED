document.addEventListener("DOMContentLoaded", function() {
    
    // 1. ระบบ Animation เวลาเลื่อนหน้าจอ
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window) {
        elements.forEach((el) => { observer.observe(el); });
    } else {
        elements.forEach((el) => { el.classList.add('show'); });
    }

    // 2. ระบบ Smooth Scroll สำหรับเมนู
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});