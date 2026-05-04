const shopSwiper = new Swiper(".swiper-shop-container", {
    roundLengths: true,
  loop: true,
  slidesPerView: 1, 
  spaceBetween: 20,
  breakpoints: {
    468: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 3, 
    },
    1200: {
      slidesPerView: 4, 
    },
    },
   pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: ".button-shop-carousel.next",
    prevEl: ".button-shop-carousel.prev",
  },
});

















//  480: {
//       slidesPerView: 2, 
//     },
//     768: {
//       slidesPerView: 3, 
//     },
//     1200: {
//       slidesPerView: 4, 
//     },
//     },