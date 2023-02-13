var swiper = new Swiper(".test", {
  // cssMode: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
});
