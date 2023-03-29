// ==========TELA DE ABERTURA==========
window.onload = function() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    continuarExecucao();
  };
function continuarExecucao() {
    // Coloque aqui o código que você quer executar depois da atualização da página
    if (window.innerWidth <= 500){
        // ADAPTAÇOES DA TELA DE ABERTURA PRO MOBILE
        var body = document.getElementById('body');
        body.style.width = '100%';
        body.style.overflow = 'hidden';
        var telaDeAbertura = document.getElementById('telaDeAbertura');
        telaDeAbertura.style.opacity = 0;
        var imagemDeAbertura = document.getElementById('imagemDeAbertura');
        imagemDeAbertura.style.transform = 'translate(0px , 0px) scale(0.65)';
        setTimeout(function(){
        telaDeAbertura.style.display = 'none';
        body.style.overflow = 'visible';
        }, 2900);
    }else{
        // ADAPTAÇOES DA TELA DE ABERTURA PRO DESCKTOP
        var body = document.getElementById('body');
        body.style.width = '100%';
        body.style.overflow = 'hidden';
        var telaDeAbertura = document.getElementById('telaDeAbertura');
        telaDeAbertura.style.opacity = 0;
        var imagemDeAbertura = document.getElementById('imagemDeAbertura');
        imagemDeAbertura.style.transform = 'translate(0px , 0px) scale(0.75)';
        setTimeout(function(){
        telaDeAbertura.style.display = 'none';
        body.style.overflow = 'visible';
        }, 2900);
    }

  }

















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
