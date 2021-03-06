
    $(function () {

        var pageColor = [0, 1, 1, 1];
        var swiper = new Swiper('.fullscreen-swiper', {
            direction: 'vertical',
            followFinger: false,
            speed: 800,
            mousewheel: true,
            pagination: {
                el: '.fullscreen-swiper>.swiper-pagination',
                clickable: true,
                bulletClass: 'fs-bullet',
                bulletActiveClass: 'fs-bullet-active'
            },
            on: {
                init: function () {
                    swiperAnimateCache(this);
                    swiperAnimate(this);
                },
                slideChangeTransitionEnd: function () {
                    swiperAnimate(this);
                    if (pageColor[this.activeIndex] == 1) {
                        $('.fullscreen-swiper>.swiper-pagination').addClass('dark');
                    } else {
                        $('.fullscreen-swiper>.swiper-pagination').removeClass('dark');
                    }
                },
            }
        });


        var swiper3 = new Swiper('.book-swiper', {
            mode: 'horizontal',
            speed: 800,
            slidesPerView: 'auto',
            pagination: {
                el: '.book-swiper>.swiper-pagination',
                clickable: true,
                bulletClass: 'hs-bullet',
                bulletActiveClass: 'hs-bullet-active'
            },
        });
    })

