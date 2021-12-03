window.addEventListener('DOMContentLoaded', () => {
const conditionsSLiderWrapper = document.querySelector('.conditions-slider .swiper');
const conditionsSlider = new Swiper(conditionsSLiderWrapper, {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
})
});