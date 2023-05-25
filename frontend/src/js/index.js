

import { fetchImages } from './api.js';

const buttonRegister = document.getElementById('register');
buttonRegister.addEventListener('click', () => {
    const inputEmail = document.getElementById('email').value;
    alert(`Confirmación enviada al correo electrónico ${inputEmail}`);
});


// using backend API to bring data images
fetchImages()
    .then(images => {
        const API_URL = 'http://localhost:5000/';
        const container = document.getElementById('container');
        container.style.backgroundSize = 'cover';

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        // background image for mobile and desktop
        if (mediaQuery.matches) {
            container.style.backgroundImage = `url(${API_URL + images[1].path})`;
        } else {
            container.style.backgroundImage = `url(${API_URL + images[0].path})`;
        }
        // background image for footer
        const footer = document.getElementById('footer');
        footer.style.backgroundImage = `url(${API_URL + images[2].path})`;
    }
    ).catch(error => console.log(error));

/* burger menu */
const burger = document.getElementById('icon');
burger.addEventListener('click', () => {
    const menu = document.getElementById('menu-links');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
);