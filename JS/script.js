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




// ==========Estado De Funcionamento==========

function exibirMensagem() {
  const data = new Date();
  const hora = data.getHours();
  const diaSemana = data.getDay();
  var mensagem = "";
  var status = "";

  if (diaSemana === 0) { // Domingo
    mensagem = "FECHADO";
    status = "fechado";
    
  } else if (diaSemana === 6) { // Sábado
    if (hora >= 8 && hora < 11) {
      mensagem = "ABERTO";
      status = "aberto";
    } else {
      mensagem = "FECHADO";
      status = "fechado";
    }
  } else { // Dias de semana (de segunda a sexta)
    if (hora >= 7 && hora < 18) {
      mensagem = "ABERTO";
      status = "aberto";
    } else {
      mensagem = "FECHADO";
      status = "fechado";
    }
  }

  document.getElementById("mensagem").innerHTML = mensagem;
  document.getElementById("mensagem").className = status;
}

setInterval(exibirMensagem, 1); // a cada 1 segundo
