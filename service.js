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

const ring = document.querySelector(".ring");
const ring_2 = document.querySelector(".ring_2");
const product_page = document.querySelector(".product_page");
const review_tit = document.querySelector(".review_tit");
const product_revie = document.querySelector(".product_revie");
const previev_sub_tit_1 = document.querySelector(".previev_sub_tit_1");
const pre_1 = document.querySelector(".pre_1");
const previe_text = document.querySelector(".previe_text");
const previev_sub_tit_2 = document.querySelector(".previev_sub_tit_2");
const pre_2 = document.querySelector(".pre_2");
const content_box = document.querySelector(".content_box");
const product_review = document.querySelector(".product_review");

// 상품정보 -> 상품 후기 페이지 전환
review_tit.addEventListener("click", () => {
  review_tit.classList.add("active");
  product_page.classList.remove("active");
  product_review.classList.add("active");
  ring.classList.remove("active");
});

ring.addEventListener("click", () => {
  review_tit.classList.remove("active");
  product_page.classList.add("active");
  product_review.classList.remove("active");
  ring.classList.add("active");
});

//담화박스 미리보기 -> 증류담화박스로 페이지 전환

previe_text.addEventListener("click", () => {
  previe_text.classList.add("active");
  ring_2.classList.remove("active");
  previev_sub_tit_1.classList.remove("active");
  previev_sub_tit_2.classList.add("active");
  pre_1.classList.remove("active");
  pre_2.classList.add("active");
});

ring_2.addEventListener("click", () => {
  previe_text.classList.remove("active");
  ring_2.classList.add("active");
  previev_sub_tit_1.classList.add("active");
  previev_sub_tit_2.classList.remove("active");
  pre_1.classList.add("active");
  pre_2.classList.remove("active");
});
