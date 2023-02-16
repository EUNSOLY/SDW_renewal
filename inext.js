var swiper = new Swiper(".review_content_box", {
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
