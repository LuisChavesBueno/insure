const menu = document.getElementById('menu')
const aparecer = document.getElementById('menu-lista')

menu.addEventListener('click' , () => {
    if(aparecer.style.display ==    'none' ){
        menu.setAttribute('src' , 'img/icon-close.png')
        aparecer.style.display = 'flex'
       
    }
    
    else{
        menu.setAttribute('src' , 'img/icon-hamburger.png')
        aparecer.style.display = 'none'
        
    }
})