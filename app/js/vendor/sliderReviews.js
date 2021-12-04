window.addEventListener('DOMContentLoaded', () => {
  const reviewsSliderWrapper = document.querySelector('.reviews-slider .swiper');
  const reviewsSlider = new Swiper(reviewsSliderWrapper, {
    
    loop: true,
    setWrapperSize:true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight:true,
        pagination: {
          el: ".reviews-swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".reviews-swiper-btn-next",
          prevEl: ".reviews-swiper-btn-prev",
          allowTouchMove: true,
        },
      },
      640: {
        slidesPerView: 1.5,
        centeredSlides:true,
        spaceBetween: 30,
        pagination: {
          el: ".reviews-swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".reviews-swiper-btn-next",
          prevEl: ".reviews-swiper-btn-prev",
          allowTouchMove: true,
        },
        autoHeight:false,
      },
      1100: {
        slidesPerView: 3,
    spaceBetween: 30,
        pagination: false,
        navigation: false,
        allowTouchMove: false,
      }
    }
  })
})