import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




import { getImages } from "./js/pixabay-api";
import { createImageCard} from "./js/render-functions";
import simpleLightbox from "simplelightbox";

const refs = {
    form: document.querySelector('form'),
    gallery: document.querySelector('.gallery')
  };

  refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = refs.form.elements.user_select.value;
  
    getImages(inputValue)
      .then(data => {
        const imgCards = data.hits.map(createImageCard).join('');
        if (data.hits.length === 0) {
          iziToast.show({
            title: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'red',
            position: 'topRight',
            progressBar: false,
          });
        } else {
          refs.gallery.innerHTML = imgCards;
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  captionsPosition: 'bottom',
 });