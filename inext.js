var swiper = new Swiper(".test", {
  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  slidesPerView: 3,
  keyboard: true,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  spaceBetween: 2,
  centeredSlides: true,
});
