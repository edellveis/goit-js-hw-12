import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/'

export function getImages(imgType) {
    const axiosOptions = {
        params: {
            key: '45416284-694200f21ad4df97e05eb7dcc',
            q: imgType,
            image_type: 'photo', 
            orientation: 'horizontal', 
            safesearch: true,
        }}
    return axios.get('', axiosOptions)
    };
    