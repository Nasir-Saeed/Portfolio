burger = document.querySelector('.burger')
navigationBar = document.querySelector('.navigationBar')
navUi = document.querySelector('.navUi')
 

burger.addEventListener('click', ()=>{
    navUi.classList.toggle('v-class-resp');
    navigationBar.classList.toggle('h-nav-resp');
})