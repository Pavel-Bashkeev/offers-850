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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1.5,
      centeredSlides:true,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})
});