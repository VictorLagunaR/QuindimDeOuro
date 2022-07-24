const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


const target = document.querySelectorAll('[data-animacao]')
const animationClass = 'animacao'

function animacaoScroll() {
    const windowTop = window.scrollY + window.innerHeight
    target.forEach(function(element){
        if ((windowTop) >element.offsetTop ) {
            element.classList.add(animationClass)
        }

    })
}

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animacaoScroll();
    },40))
}

animacaoScroll()