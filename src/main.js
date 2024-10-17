import { getPhotos } from './js/pixabay-api.js';
import { renderImages, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.search-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: "Please enter a search term!",
        });
        return;
    }
    form.reset();


    clearGallery();
    showLoader();
    getPhotos(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            } else {
                renderImages(images);
                const lightbox = new SimpleLightbox('.gallery a');
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.error(error);
            iziToast.error({
                title: 'Error',
                message: "Something went wrong. Please try again later.",
            });
        })
        .finally(() => {
            hideLoader()
        });
});
