const microloansPartnersSwiper = new Swiper('.microloans-partners-slider', {
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        762: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1201: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.microloans-partners-next',
        prevEl: '.microloans-partners-prev',
    },
});
