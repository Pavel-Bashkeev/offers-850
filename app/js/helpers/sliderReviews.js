window.addEventListener('DOMContentLoaded', () => {
  const reviewsSliderWrapper = document.querySelector('.reviews-slider .swiper');
  const reviewsSlider = new Swiper(reviewsSliderWrapper, {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: false,
    pagination: false,
    navigation: false,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".reviews-swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".reviews-swiper-btn-next",
          prevEl: ".reviews-swiper-btn-prev",
        },
      },
      640: {
        pagination: false,
        navigation: false,
      }
    }
  })
})