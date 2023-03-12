let lastScrollTop = 0
let header = document.getElementsByClassName('js-header')[0]
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.classList.add('u-hide')
    }else{
        header.classList.remove('u-hide')
    }
    lastScrollTop = scrollTop
})