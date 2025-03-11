export function slider(slides) {
  var swiper;

  for (var i = 321; i <= window.innerWidth; i++) {
    slides += 0.004;
  }

  if (window.innerWidth <= 767) {
    swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: slides,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    });
  } else if (swiper) {
    swiper.destroy();
  }
}
