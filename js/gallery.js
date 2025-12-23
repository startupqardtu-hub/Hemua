// ===============================
// GALLERY MODULE
// ===============================

import { galleryItems } from './data.js';

let currentGalleryFilter = 'All';

/* ===============================
   RENDER GALLERY
=============================== */
export function renderGallery(filter = 'All') {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    currentGalleryFilter = filter;

    const filteredItems =
        filter === 'All'
            ? galleryItems
            : galleryItems.filter(item => item.category === filter);

    container.innerHTML = '';

    filteredItems.forEach(item => {
        const card = document.createElement('a');
        card.href = item.link;
        card.target = '_blank';
        card.className =
            'group bg-white rounded-3xl shadow-lg overflow-hidden card-hover';

        card.innerHTML = `
            <!-- IMAGE -->
            <div class="relative aspect-video overflow-hidden bg-gray-100">
                <img
                    src="${item.thumbnail}"
                    alt="${item.title}"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                ${
                    item.type === 'video'
                        ? `<div class="absolute inset-0 flex items-center justify-center bg-black/30">
                               <i class="fas fa-play-circle text-white text-5xl"></i>
                           </div>`
                        : ''
                }
            </div>

            <!-- CONTENT -->
            <div class="p-6">
                <span class="text-xs font-semibold text-blue-600 uppercase">
                    ${item.category}
                </span>
                <h3 class="font-bold text-lg mt-2 text-gray-800">
                    ${item.title}
                </h3>
                <p class="text-sm text-gray-500 mt-1">
                    ${item.date}
                </p>
            </div>
        `;

        container.appendChild(card);
    });

    updateGalleryStats();
}

/* ===============================
   FILTER HANDLER
=============================== */
export function filterGallery(category) {
    currentGalleryFilter = category;

    const buttons = document.querySelectorAll('.gallery-filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-800', 'border');
    });

    const activeBtn = document.querySelector(
        `.gallery-filter-btn[data-category="${category}"]`
    );

    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-gray-800');
        activeBtn.classList.add('bg-blue-600', 'text-white');
    }

    renderGallery(category);
}

/* ===============================
   STATS
=============================== */
function updateGalleryStats() {
    const photoCount = document.getElementById('photoCount');
    const videoCount = document.getElementById('videoCount');
    const totalCount = document.getElementById('totalCount');

    if (photoCount) {
        photoCount.textContent =
            galleryItems.filter(i => i.type === 'photo').length;
    }

    if (videoCount) {
        videoCount.textContent =
            galleryItems.filter(i => i.type === 'video').length;
    }

    if (totalCount) {
        totalCount.textContent = galleryItems.length;
    }
}

/* ===============================
   GLOBAL ACCESS (HTML onclick)
=============================== */
window.filterGallery = filterGallery;
