
   export function createImageCard(image) {
    return `
        <div class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <span class="info-label">Likes:</span>
                    <span class="info-value">${image.likes}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Views:</span>
                    <span class="info-value">${image.views}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Comments:</span>
                    <span class="info-value">${image.comments}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Downloads:</span>
                    <span class="info-value">${image.downloads}</span>
                </p>
            </div>
        </div>
    `;
}

