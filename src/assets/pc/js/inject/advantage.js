    $(function () {
        var pageColor = [0, 1, 1, 1];
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


        var swiper3 = new Swiper('.book-swiper', {
            mode: 'horizontal',
            slidesPerView: 3,
            slidesPerGroup: 3,
            paginationClickable: true,
            onlyExternal : true,
            calculateHeight: true,
            speed:800,
            onInit: function (swiper) {
                createPagination('.book-swiper',3,swiper);
            },
            onSlideChangeEnd: function (swiper) {
                console.log(swiper.activeIndex);
//                updatePagination('.book-swiper',3,swiper.activeIndex);
            }
        });

        $('.s4 .prev').click(function () {
            $('.book-swiper>.swiper-pagination .hs-bullet-active').prev().trigger('click');
        });
        $('.s4 .next').click(function () {
            $('.book-swiper>.swiper-pagination .hs-bullet-active').next().trigger('click');
        });
    })