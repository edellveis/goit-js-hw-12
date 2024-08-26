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


import { getImages} from "./js/pixabay-api";
import { createImageCard } from "./js/render-functions";


const refs = {
    form: document.querySelector('form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnLoadMore: document.querySelector('.btn-load-more')
};
let currnetPage = 1;
let inputValue = ''

async function searchSubmit (event) {
  try {
    event.preventDefault();
   inputValue = refs.form.elements.user_select.value;

   currnetPage = 1;


   refs.gallery.innerHTML = ''; 
   refs.loader.style.display = 'block';
    const  response =  await getImages(inputValue,currnetPage);
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
          refs.btnLoadMore.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  } finally{
    refs.loader.style.display = 'none';
  }
}
async function  onLoadMore (event) {
      try {

        refs.btnLoadMore.classList.add('is-hidden'); 
        refs.loader.style.display = 'block';


          currnetPage ++;

          const response = await getImages(inputValue, currnetPage);          
          
          const imgCards = response.data.hits.map(createImageCard).join('');
            refs.gallery.insertAdjacentHTML('beforeend', imgCards);
            lightbox.refresh();

            refs.btnLoadMore.classList.remove('is-hidden');

            const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();

            window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
          
            const totalPages = Math.ceil(response.data.totalHits / 20);
            if (currnetPage >= totalPages){
              refs.btnLoadMore.classList.add('is-hidden')
              iziToast.show({
                title: "We're sorry, but you've reached the end of search results.",
                color: 'blue',
                position: 'topRight',
                progressBar: false,
              })
            }
      } catch (err) {
          console.log(err);
      }finally{
        refs.loader.style.display = 'none';
      }
  }
    refs.form.addEventListener('submit', searchSubmit)
    refs.btnLoadMore.addEventListener('click', onLoadMore)
    