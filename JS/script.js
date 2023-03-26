// ========== MENU ==========
// Open menu
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
var navinicio = document.querySelectorAll('#nav-menu');
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})
// Close menu
function esconder(){
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
}
// ========== ==========
