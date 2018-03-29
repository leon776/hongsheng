    var swiper;
    function slideNextPage() {
        swiper.swipeTo(1);
    }
    $(function () {
        var pageColor = [0, 1, 1, 0, 1];
        swiper = new Swiper('.fullscreen-swiper', {
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


        var swiper2 = new Swiper('.product-swiper', {
            mode: 'horizontal',
            speed: 800,
            slidesPerView: 1,
            calculateHeight: true,
            paginationClickable: true,
            onlyExternal : true,
            pagination: '.product-swiper>.swiper-pagination',
            paginationElementClass: 'hs-bullet',
            paginationActiveClass: 'hs-bullet-active',
        });

        $('.product-prev').click(function () {
            swiper2.swipePrev();
        });
        $('.product-next').click(function () {
            swiper2.swipeNext();
        });

        var swiper3 = new Swiper('.cs1',{
            mode: 'horizontal',
            slidesPerView: 6,
            slidesPerGroup: 6,
            paginationClickable: true,
            onlyExternal : true,
            calculateHeight: true,
            speed:800,
            onInit: function (swiper) {
                createPagination('.cs1',6,swiper);
            }
        });
        var swiper4;

        $('.s5 .w-btn').click(function(){
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.s5 .swiper-box .customer-swiper').hide();
            $('.s5 .swiper-box .customer-swiper').eq(index).show();
            if($(this).attr('id') == 'tech' && swiper4 == undefined){
                setTimeout(function(){
                    swiper4 = new Swiper('.cs2',{
                        mode: 'horizontal',
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        paginationClickable: true,
                        onlyExternal : true,
                        calculateHeight: true,
                        speed:800,
                        onInit: function (swiper) {
                            createPagination('.cs2',6,swiper);
                        }
                    });
                },20);
            }
        })
    })