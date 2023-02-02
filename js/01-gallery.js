import { galleryItems } from './gallery-items.js';
// Change code below this 

console.log(galleryItems);

const imagesGallery = document.querySelector('.gallery');

const listImages = galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    />
  </a>
</div>`
).join('');

imagesGallery.insertAdjacentHTML('beforeend', listImages);

imagesGallery.addEventListener('click', openImage)

function openImage(event) {
  event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

  const bigImage = event.target.dataset.source;
  const modalGallery = basicLightbox.create(
    `<img src="${bigImage}" width="800" height="800" >`,

    {
      onShow: modalGallery => { window.addEventListener('keydown', onEscKeyPress) },
      onClose: modalGallery => { window.removeEventListener('keydown', onEscKeyPress) },
    }
  );
  function onEscKeyPress(event) {
    if (event.code === 'Escape' && basicLightbox.visible()) {
      modalGallery.close();
    }
  }
  modalGallery.show();
};