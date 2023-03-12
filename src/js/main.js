let lastScrollTop = 0
header = document.getElementsByClassName('js-header')[0]
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.transform = "translateY(-44px)"
    }else{
        header.style.transform = "translateY(0px)"
    }
    lastScrollTop = scrollTop
})