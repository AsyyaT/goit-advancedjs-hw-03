export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li><a href="${largeImageURL}" class="gallery-item" data-lightbox="image">
            <div class="image-container"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></div>
            <div class="card-description">
                <p class="info"><span>Likes</span> ${likes}</p>
                <p class="info"><span>Views</span> ${views}</p>
                <p class="info"><span>Comments</span> ${comments}</p>
                <p class="info"><span>Downloads</span> ${downloads}</p>
            </div>
        </a></li>
    `).join('');

    gallery.innerHTML = `<ul class="gallery-list">${markup}</ul>`;
}

export function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}
