
const API_URL = 'http://localhost:5000';
function fetchImages() {
    return fetch(`${API_URL}/images`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export { fetchImages };