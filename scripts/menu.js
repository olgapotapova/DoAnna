
let menu = document.getElementById('menu-right');
let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

