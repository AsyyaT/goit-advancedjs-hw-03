const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '46511774-6d45b03e21a284b47c5b7e772';


function getPhotos(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  });

  const url = `${BASE_URL}/?${params}`;

  return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
    .then(data => data.hits);
}

export { getPhotos };