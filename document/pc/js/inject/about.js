    $(function () {
        var pageColor = [0, 0, 1, 1];
        var swiper = new Swiper('.fullscreen-swiper', {
            mode: 'vertical',
            speed: 800,
            mousewheelControl: true,
            pagination: '.fullscreen-swiper>.swiper-pagination',
            paginationElementClass: 'fs-bullet',
            paginationActiveClass: 'fs-bullet-active',
            paginationClickable: true,
            onInit: function (swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper);
                changeColor(pageColor,swiper.activeIndex);
            }
        });

        var timeSwiper = new Swiper('.time-swiper',{
            mode: 'horizontal',
            slidesPerView: 5,
            slidesPerGroup: 5,
            paginationClickable: true,
            onlyExternal : true,
            calculateHeight: true,
            speed:800,
        });

        $('.s2 .prev').click(function () {
            timeSwiper.swipePrev();
        });
        $('.s2 .next').click(function () {
            timeSwiper.swipeNext();
        });


        var swiper3 = new Swiper('.people-swiper', {
            mode: 'horizontal',
            speed: 800,
            slidesPerView: 1,
            calculateHeight: true,
            paginationClickable: true,
            onlyExternal : true,
            pagination: '.people-swiper>.swiper-pagination',
            paginationElementClass: 'hs-bullet',
            paginationActiveClass: 'hs-bullet-active',
        });

        $('.s4 .prev').click(function () {
            swiper3.swipePrev();
        });
        $('.s4 .next').click(function () {
            swiper3.swipeNext();
        });
    })