const btnMenu = document.querySelector('#botao__menu')
const btnSubmenu = document.querySelector('#produtos')
const produtos = document.querySelector('#produtos')

//função para a versão mobile
    function menu() {
        const nav = document.querySelector('#cabecalho__navegacao')

        nav.classList.toggle('ativo')
        btnSubmenu.removeEventListener('mouseenter', EntrarSubmenu)
        btnSubmenu.removeEventListener('mouseleave', SairSubmenu)
        btnSubmenu.addEventListener('click', submenu)

    }

    function EntrarSubmenu() {
        produtos.classList.toggle('ativo')

        
    }
    
    function SairSubmenu() {
        produtos.classList.toggle('ativo')
        
        
    }

function submenu() {

    produtos.classList.toggle('ativo')
}



btnMenu.addEventListener('click', menu)
btnSubmenu.addEventListener('mouseenter', EntrarSubmenu)
btnSubmenu.addEventListener('mouseleave', SairSubmenu)
