
//recebendo as opções dos itens para categorização
const mostrar = document.querySelector('[data-todos]')
const opcoes = document.querySelectorAll('[data-opcao]');

//recebendo todos os itens categorizados
const categorias = document.querySelectorAll('[data-categoria]')


//função para desaparecer todos os itens (chamada na função opcao)
function desaparecendoTodoAsOpcoes() {
    const opcoes = document.querySelectorAll('[data-categoria]')
    for (let x = 0; x < opcoes.length; x++) {
        opcoes[x].classList.add('disappear');
        opcoes[x].classList.remove('show');
    }
}


//função para mostrar todos os itens
function mostrarTodos() {
    const opcoes = document.querySelectorAll('[data-categoria]')
    for (let x = 0; x < opcoes.length; x++) {
        opcoes[x].classList.remove('disappear');
        opcoes[x].classList.add('show');
        
    }
}


//função para mostrar os itens que foram selecionados pelo o botão 
function opcao() {
    
    desaparecendoTodoAsOpcoes();

        for (let i = 0; i < categorias.length; i++) {
            
            if (this.dataset.opcao == categorias[i].dataset.categoria) {
                categorias[i].classList.remove('disappear');
                categorias[i].classList.add('show');
                
            }

        }   

}

//estrutura de repetição para criar um addEvenrListener a todos os botões que existem na página
for (let position = 0; position < opcoes.length; position++) {
 
    opcoes[position].addEventListener('click', opcao)    

}

mostrar.addEventListener('click', mostrarTodos);