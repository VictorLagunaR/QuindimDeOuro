
//recebendo os botões da parte de categoria
const mostrar = document.querySelector('[data-todos]')
const opcaoUm = document.querySelector('[data-opcao=um]')
const opcaoDois = document.querySelector('[data-opcao=dois]')
const opcaoTres = document.querySelector('[data-opcao=tres]')
const opcaoQuatro = document.querySelector('[data-opcao=quatro]')

//recebendo todos os itens categorizados
const categorias = document.querySelectorAll('[data-categoria]')

function desaparecendoTodoAsOpcoes() {
    const opcoes = document.querySelectorAll('[data-categoria]')
    for (let x = 0; x < opcoes.length; x++) {
        opcoes[x].style.display="none";
    }
}

function mostrarTodos() {
    const opcoes = document.querySelectorAll('[data-categoria]')
    for (let x = 0; x < opcoes.length; x++) {
        opcoes[x].style.display="flex";
        
    }
}

function opcao1() {

    desaparecendoTodoAsOpcoes();

    const opcoes1 = document.querySelectorAll('[data-categoria = um]');
    for (let x = 0; x < opcoes1.length; x++) {
        opcoes1[x].style.display = "flex";
        
    }
    
}

function opcao2() {
    
    desaparecendoTodoAsOpcoes();

    const opcoes2 = document.querySelectorAll('[data-categoria = dois]')
    for (let x = 0; x < opcoes2.length; x++) {
        opcoes2[x].style.display = "flex";
        
    }
}

function opcao3() {
    
    desaparecendoTodoAsOpcoes();

    const opcoes3 = document.querySelectorAll('[data-categoria = tres]')
    for (let x = 0; x < opcoes3.length; x++) {
        opcoes3[x].style.display = "flex";
        
    }
}

function opcao4() {
    
    desaparecendoTodoAsOpcoes();

    const opcoes4 = document.querySelectorAll('[data-categoria = quatro]')
    for (let x = 0; x < opcoes4.length; x++) {
        opcoes4[x].style.display = "flex";
        
    }
}

mostrar.addEventListener('click', mostrarTodos);
opcaoUm.addEventListener('click', opcao1);
opcaoDois.addEventListener('click', opcao2);
opcaoTres.addEventListener('click', opcao3);
opcaoQuatro.addEventListener('click', opcao4);