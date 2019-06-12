var swiper = new Swiper('.swiper-container', {
    // effect: 'coverflow',
    spaceBetween: 200,
    initialSlide:2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // coverflowEffect: {
    //     rotate: 0,// set to 0 to stop rotation
    //     stretch: 0,
    //     depth: 0,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction:false
      },
});