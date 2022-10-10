let menu = document.querySelector('nav div')
let menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click',e=>{
    if(menu.className == ''){
        menu.classList.add('show-nav')
        menuBtn.src = "images/icon-close.png"
    }else{
        menu.classList.remove('show-nav')
        menuBtn.src = "images/icon-hamburger.png"
    }
})
menu.addEventListener('mousedown',e=>{
  closeNav(e)
})
menu.addEventListener('touchstart',e=>{
    closeNav(e)
  })
function closeNav(e){
    if(e.target.tagName != 'LI'){
        menuBtn.click()
    }
}
if(window.innerWidth < 800){
    menuBtn.src = "images/icon-hamburger.png"
}