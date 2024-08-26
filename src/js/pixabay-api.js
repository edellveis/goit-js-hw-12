import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/'

export function getImages(inputValue, page) {
    const axiosOptions = {
        params: {
            key: '45416284-694200f21ad4df97e05eb7dcc',
            page:`${page}`,
            per_page: 15,
            q: inputValue,
            image_type: 'photo', 
            orientation: 'horizontal', 
            safesearch: true,
        }}
    return axios.get('', axiosOptions)
    };
  