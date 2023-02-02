import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesGallery = document.querySelector('.gallery');

const listImages = galleryItems.map(({ preview, original, description }) => 
    `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`
).join('');

imagesGallery.insertAdjacentHTML('beforeend', listImages);

const lightbox = new SimpleLightbox('.gallery a',
  { captionsData: 'alt', captionDelay: 250 });