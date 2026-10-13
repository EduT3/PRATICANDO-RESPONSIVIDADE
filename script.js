"use strict";
// Cada carrossel mantém seus próprios controles, sem afetar o vizinho.
if (typeof Swiper !== "undefined") {
  document.querySelectorAll(".swiper").forEach(elemento => {
    new Swiper(elemento, {
      spaceBetween: 12,
      slidesPerView: 2,
      breakpoints: { 600: { slidesPerView: 3 } },
      keyboard: { enabled: true, onlyInViewport: true },
      pagination: { el: elemento.querySelector(".swiper-pagination"), clickable: true },
      navigation: {
        nextEl: elemento.querySelector(".swiper-button-next"),
        prevEl: elemento.querySelector(".swiper-button-prev")
      },
      a11y: { prevSlideMessage: "Livro anterior", nextSlideMessage: "Próximo livro", paginationBulletMessage: "Ir para o grupo {{index}}" }
    });
  });
} else {
  document.querySelectorAll(".swiper").forEach(elemento => elemento.classList.add("swiper-fallback"));
}
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  ["menu", "opções-menu"].forEach(id => {
    const menu = document.getElementById(id);
    if (menu.checked) { menu.checked = false; menu.focus(); }
  });
});
