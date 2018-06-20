var swiper;
    function slideNextPage() {
        swiper.slideTo(1);
    }

    $(function(){
        var pageColor = [0, 1, 1, 0, 1, 0];
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


        var swiper2 = new Swiper('.product-swiper', {
            mode: 'horizontal',
            speed: 800,
            slidesPerView: 'auto',
            pagination: {
                el: '.product-swiper>.swiper-pagination',
                clickable: true,
                bulletClass: 'hs-bullet',
                bulletActiveClass: 'hs-bullet-active'
            },
        });

        var swiper3 = new Swiper('.cs1', {
            mode: 'horizontal',
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 3,
            speed: 800,
            pagination: {
                el: '.cs1>.swiper-pagination',
                clickable: true,
                bulletClass: 'hs-bullet',
                bulletActiveClass: 'hs-bullet-active'
            },
        });
        var swiper4;

        $('.s5 .w-btn').click(function () {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.s5 .swiper-box .customer-swiper').hide();
            $('.s5 .swiper-box .customer-swiper').eq(index).show();
            if ($(this).attr('id') == 'tech' && swiper4 == undefined) {
                setTimeout(function () {
                    swiper4 = new Swiper('.cs2', {
                        mode: 'horizontal',
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        slidesPerColumn: 3,
                        speed: 800,
                        pagination: {
                            el: '.cs2>.swiper-pagination',
                            clickable: true,
                            bulletClass: 'hs-bullet',
                            bulletActiveClass: 'hs-bullet-active'
                        },
                    });
                }, 20);
            }
        })
    })