const header = document.getElementsByClassName('js-header')[0]
let lastScrollTop = 0

window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        header.classList.add('u-hide')
    }else{
        header.classList.remove('u-hide')
    }
    lastScrollTop = scrollTop
})

const menuOpen = document.getElementsByClassName('js-menu-open')[0]
const menuClose = document.getElementsByClassName('js-menu-close')[0]
const navigationMenu = document.getElementsByClassName('js-navigation-list')[0]

const toggleClick = function(button, elementToggled, utility){
    button.addEventListener('click', function(){
        elementToggled.classList.toggle(utility);
    })
}

toggleClick(menuOpen,navigationMenu,'u-toggle')
toggleClick(menuClose,navigationMenu,'u-toggle')

const listItem = Array.from(document.getElementsByClassName('js-list-item'))
const listContent = Array.from(document.getElementsByClassName('js-list-content'))

const toggleClickSubmenu = function(button, elementToggled, utility){
    button.forEach(function(el, i){
        el.addEventListener('click', function(){
            elementToggled[i].classList.toggle(utility)
        })
    })
}

toggleClickSubmenu(listItem, listContent, 'u-toggle')
