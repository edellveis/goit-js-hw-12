import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

 import iziToast from "izitoast";
 import "izitoast/dist/css/iziToast.min.css";

//  iziToast.show({
//   title: '',
//   color: 'red',
//   position: 'topRight',
//   progressBar: false,})

import { getImages } from "./js/pixabay-api";
import { createImageCard} from "./js/render-functions";

const refs = {
    form: document.querySelector('form'),
    gallery: document.querySelector('.gallery')
  };

refs.form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const inputValue = refs.form.elements.user_select.value;
  getImages(inputValue)
  .then(data =>{
    return data.hits.map(createImageCard).join('');
  })
  .then(imgCard =>{
    refs.gallery.innerHTML = imgCard;
  })
  .catch(err=>{
      console.log(err);
        })
})

new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  captionsPosition: 'bottom'
 });