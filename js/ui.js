export function initUI() {

    window.switchTab = function(tabId) {
        document.querySelectorAll('.section').forEach(s =>
            s.classList.remove('active')
        );
        const target = document.getElementById(tabId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.toggleMobileMenu = function() {
        document.getElementById('mobileMenu')?.classList.toggle('open');
        document.getElementById('mobileMenuOverlay')?.classList.toggle('hidden');
    };

    window.addEventListener('scroll', () => {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        btn.classList.toggle('opacity-100', window.scrollY > 500);
        btn.classList.toggle('visible', window.scrollY > 500);
    });

    window.scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: 'smooth' });
}
