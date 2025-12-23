// ===============================
// MAIN ENTRY FILE (main.js)
// ===============================

import { renderGallery } from './gallery.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       PRELOADER HANDLING
    =============================== */
    const preloader = document.getElementById('preloader');

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';

            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                }
            }, 500);
        }, 1200);
    }

    /* ===============================
       UI INITIALIZATION
    =============================== */
    try {
        initUI();
    } catch (err) {
        console.error('UI initialization error:', err);
    }

    /* ===============================
       GALLERY INITIALIZATION
    =============================== */
    try {
        renderGallery('All');
    } catch (err) {
        console.error('Gallery rendering error:', err);
    }

});
