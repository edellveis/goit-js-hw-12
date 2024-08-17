
export function getImages(imgType) {
    return fetch(`https://pixabay.com/api/?key=45416284-694200f21ad4df97e05eb7dcc&q=${imgType}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status); 
        }
        else if (imgType === ""){
            return
        }
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
}