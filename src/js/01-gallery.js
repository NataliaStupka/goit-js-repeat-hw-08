import { galleryItems } from './gallery-items'; //масив зображень

import { createMarkup } from '../helpers/01-gallery/createMarkup'; //функція розмітки

import SimpleLightbox from 'simplelightbox'; //імпорт бібліотеки
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів бібліотеки

// Change code below this line
console.log('Home worck 8.1: "simplelightbox"');

const list = document.querySelector('.js-gallery');

//розмітка
createMarkup(galleryItems, list);

//модальне вікно
new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
