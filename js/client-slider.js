const clientSwiper = new Swiper(".swiper-client-container", {
  roundLengths: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 38,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".button-client-carousel.next",
    prevEl: ".button-client-carousel.prev",
  },
});















