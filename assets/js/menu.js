const btnMenu = document.querySelector('#botao__menu')
const btnSubmenu = document.querySelector('#produtos')

function menu() {
    const nav = document.querySelector('#cabecalho__navegacao')

    nav.classList.toggle('ativo')
}

function submenu() {
    const produtos = document.querySelector('#produtos')
    produtos.classList.toggle('ativo')
}

function EntrarSubmenu() {
    produtos.classList.toggle('ativo')
}

function SairSubmenu() {
    produtos.classList.toggle('ativo')
}

btnMenu.addEventListener('click', menu)
btnSubmenu.addEventListener('mouseenter', EntrarSubmenu)
btnSubmenu.addEventListener('mouseleave', SairSubmenu)
btnSubmenu.addEventListener('click', submenu)



var splide = new Splide( '.splide', {
    updateOnMove: true,
    cover   : true,
    type   : 'loop',
    perPage     : 3,
    perMove     : 1,
    focus  : 'center',
    autoplay: true,
    pauseOnHover:true,
    breakpoints:{
        600:{
            perPage:1,
            perMove:1,
        },
        1000:{
            perPage:2,
            perMove: 2,
        }
    }
    } );
    splide.mount();



