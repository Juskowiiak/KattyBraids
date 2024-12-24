const navegador = document.querySelector(".navegador");
//abrir Menu
function abrirMenu() {
  navegador.classList.toggle("closeMenu");
  document.body.style.overflowY = "hidden";
}

//vai ajustado a tela
window.addEventListener("resize", ajustar);

function ajustar() {
  if (window.outerWidth < 900) {
    document.body.style.overflowY = "scroll";
  }
}

//quando elemento clicado fecha o menu
const elementos = document.querySelectorAll(".opcao").forEach((dado) => {
  dado.addEventListener("click", () => {
    navegador.classList.toggle("closeMenu");
    document.body.style.overflowY = "scroll";
  });
});
