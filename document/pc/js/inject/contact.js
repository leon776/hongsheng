    $(function () {
        $('.left-bar .w-btn').click(function(){
            var index = $(this).index(),target = $(this).attr('data-target');
            location.hash = target;
            $(this).addClass('active').siblings().removeClass('active');
            $('.tab-content-list .content-item').eq(index).addClass('current').siblings().removeClass('current');
        })

    })