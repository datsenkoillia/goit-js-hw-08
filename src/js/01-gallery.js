import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div>
          <a class="gallery__item" href="${original}">
            <img style="display: block" class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </div>
  `;
    })
    .join('');
}

const galleryMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});