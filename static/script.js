/* ABRE E FECHA MENU LATERAL  EM MODO MOBILE */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x-lg")
    : menuMobile.classList.replace("bi-x-lg","bi-list");
    body.classList.toggle('menu-nav-active');
});
