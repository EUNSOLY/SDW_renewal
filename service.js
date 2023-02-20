// 모달창
const service_btn_2 = document.querySelector(".service_btn_2");
const mo_close = document.querySelector(".modal_close");
const product_close = document.querySelector(".modal_btn>span");
const modal = document.querySelector(".modal-overlay");

service_btn_2.addEventListener("click", () => {
  modal.classList.add("active");
});

mo_close.addEventListener("click", () => {
  modal.classList.remove("active");
});
product_close.addEventListener("click", () => {
  modal.classList.remove("active");
});

//구독상품에서 리뷰창으로 페이지전환
const product_page = document.querySelector(".product_page");
const preview_wrap = document.querySelector(".preview_wrap");
const product_review = document.querySelector(".product_review");
const review_tit = document.querySelector(".review_tit");
const ring = document.querySelector(".product_review .ring");

review_tit.addEventListener("click", () => {
  product_page.classList.remove("active");
  preview_wrap.classList.remove("active");
  product_review.classList.add("active");
});

ring.addEventListener("click", () => {
  product_page.classList.add("active");
  preview_wrap.classList.add("active");
  product_review.classList.remove("active");
});

//구독상품 미리보기 페이지전환
const pre_1 = document.querySelector(".pre_1");
const pre_2 = document.querySelector(".pre_2");
const tit_on = document.querySelector(".pre_2 .ring ");
const previe_text = document.querySelector(".previe_text");

previe_text.addEventListener("click", () => {
  pre_1.classList.remove("active");
  pre_2.classList.add("active");
});
tit_on.addEventListener("click", () => {
  pre_1.classList.add("active");
  pre_2.classList.remove("active");
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     800: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });
