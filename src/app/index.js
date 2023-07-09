const button = document.querySelector('.nav__menu');
const list = document.querySelector('.list');


// Listenery
button.addEventListener('click', () => {
    list.classList.toggle('active');
});