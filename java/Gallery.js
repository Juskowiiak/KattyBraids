//abrir Menu
function abrirGallery() {
  const gallery = document.querySelector(".gallery-photo");
  gallery.classList.toggle("galleryOpen");
  document.body.style.overflowY = "hidden";
}
//fechar Menu
function fecharGallery() {
  const gallery = document.querySelector(".gallery-photo");
  gallery.classList.toggle("galleryOpen");
  document.body.style.overflowY = "scroll";
}
