const botaoCategoriaUm = document.getElementsByClassName('.categorias__botao, [0]')
const categorias = document.querySelectorAll('[data-categoria]')
const produtosContainer = document.getElementsByClassName('produtos__container')

function opcao() {
    console.log('a')
    for (let categorias = 0; categorias < categorias.length; categorias++) {
        console.log("a")
        if (produtosContainer.dataset.categoria == categorias.dataset.opcao) {
        
            console.log("produtosContainer")
        }
    
    }
    
}

botaoCategoriaUm.addEventListener('click', opcao)
