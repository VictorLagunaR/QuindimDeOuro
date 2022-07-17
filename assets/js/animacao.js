const target = document.querySelectorAll('[data-animacao]')
const animationClass = 'animacao'

function animacaoScroll() {
    const windowTop = window.scrollY + (window.innerHeight*0.82)
    target.forEach(function(element){
        if ((windowTop) >element.offsetTop ) {
            element.classList.add(animationClass)
        }
    })
}

animacaoScroll()