/* ABRE E FECHA MENU LATERAL  EM MODO MOBILE */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x-lg")
    : menuMobile.classList.replace("bi-x-lg","bi-list");
    body.classList.toggle('menu-nav-active');
});



/* FECHA O MENU AO CLICAR EM ALGUMA ABA E MUDA O ICONE PARA 'LIST' */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x-lg","bi-list"); 
        }
    })
})