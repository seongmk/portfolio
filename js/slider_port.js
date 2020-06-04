$(function(){
  var swiper = new Swiper('.swiper-container', {
    // Default parameters
    spaceBetween: 30,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      }
    }
  })
})