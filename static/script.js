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



// ANIMAR TODOS OS ITENS DA TELA QUE TIVEREM O ATRIBUTO data-anime
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");

        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})


// ATIVAR BOTÃO ENVIANDO/LOADER
const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
})

// TIRAR MENSAGEM DEPOIS DE 4 SEGUNDOS
setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 4000)