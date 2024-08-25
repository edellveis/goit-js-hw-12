import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  captionsPosition: 'bottom',
});


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImages } from "./js/pixabay-api";
import { createImageCard } from "./js/render-functions";


const refs = {
    form: document.querySelector('form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit',async (event) => {
    try {
      event.preventDefault();
    const inputValue = refs.form.elements.user_select.value;
    refs.gallery.innerHTML = ''; 
    refs.loader.style.display = 'block';
      const  response =  await getImages(inputValue);
      if (response.data.hits.length === 0) {
            iziToast.show({
              title: 'Sorry, there are no images matching your search query. Please try again!',
              color: 'red',
              position: 'topRight',
              progressBar: false,
            });
          }
            const imgCards = response.data.hits.map(createImageCard).join('');
            refs.gallery.innerHTML = imgCards;
            lightbox.refresh();      
    } catch (err) {
      console.log(err);
    } finally{
      refs.loader.style.display = 'none';
    }})
    // axios test 