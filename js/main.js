const toolsFraction = document.querySelector(".tools-slider__fraction");
const toolsSlides = document.querySelectorAll(".tools-slider .swiper-slide");
const toolsSlideCount = toolsSlides.length;
toolsFraction.innerHTML = `<span>${1}</span> / ${toolsSlideCount}`;

const toolsSwiper = new Swiper('.tools-slider', {
    navigation: {
        nextEl: '.tools-slider__next',
        prevEl: '.tools-slider__prev',
    },

    pagination: {
        el: '.tools-slider__pagination',
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet_active',
        clickable: true,
    },

    on: {
        slideChange: () => {
            toolsFraction.innerHTML = `<span>${toolsSwiper.realIndex + 1}</span> / ${toolsSlideCount}`;
        }
    }
});

const clietnsSwiper = new Swiper('.clients-slider', {
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        762: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1201: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },

    navigation: {
        nextEl: '.clients-slider__next',
        prevEl: '.clients-slider__prev',
    },
});
