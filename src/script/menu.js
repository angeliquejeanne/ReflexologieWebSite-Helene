const menu = document.getElementById('bg_menu');
const overlay = document.getElementById('menu_open');

menu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});