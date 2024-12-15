//abrir Menu
function abrirMenu() {
  const navegador = document.querySelector(".navegador");
  navegador.classList.toggle("closeMenu");
  document.body.style.overflowY = "hidden";
}
//fechar Menu
function fecharMenu() {
  const navegador = document.querySelector(".navegador");
  navegador.classList.toggle("closeMenu");
  document.body.style.overflowY = "scroll";
}
