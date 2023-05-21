// Add imports above this line

import SimpleLightbox from  "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

const itemsPreviewMarkup = galleryItems.map(item =>
 `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt='${item.description}'
    />
  </a>
</li>`).join('');


const optionsSet = {
    captionDelay: 250,
    captionsData: 'alt',
    animationSpeed: 300,
    swipeTolerance: 50,
    fadeSpeed: 300,
    scrollZoomFactor: 0.1,
    }  

const galleryBox = document.querySelector('.gallery');
galleryBox.insertAdjacentHTML('beforeend', itemsPreviewMarkup);

 new SimpleLightbox('.gallery a',  optionsSet);
