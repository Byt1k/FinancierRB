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

document.addEventListener('DOMContentLoaded', function() {
    function initSwipers() {
        const allSliders = document.querySelectorAll('.examples-slider');
        allSliders.forEach(slider => {
            if (!slider.swiper) {
                new Swiper(slider, {
                    breakpoints: {
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                        },
                        762: {
                            slidesPerView: 2.4,
                            spaceBetween: 15,
                        },
                        1201: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    },
                });
            }
        });
    }

    initSwipers();
    
    // табы примеров работ
    const tabItems = document.querySelectorAll('.examples .filter__item');
    const tabContents = document.querySelectorAll('.examples-slider');
    
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            tabItems.forEach(tab => tab.classList.remove('filter__item_active'));
            this.classList.add('filter__item_active');

            const tabIndex = this.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            document.querySelector(`.examples-slider[data-tab-content="${tabIndex}"]`).classList.add('active');
        });
    });

    // Навигация в футере
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()

            const href = this.getAttribute('href');

            // Если ссылка ведет на примеры работ с указанием таба
            if (href.startsWith('examples_')) {
                const tabIndex = parseInt(href.split('_')[1]);

                if (!isNaN(tabIndex) && tabItems[tabIndex]) {
                    const examplesSection = document.getElementById('examples');
                    if (examplesSection) {
                        examplesSection.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }

                    console.log(tabItems[tabIndex]);
                    
                    
                    setTimeout(() => {
                        tabItems[tabIndex].click();
                    }, 300);
                }
                return;
            }

            // Обычный сколл
            const targetElement = document.getElementById(href);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
});
