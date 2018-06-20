$(function(){
	//go top
	//b();
	//$('.top-button').click(function(){
	//	$('html,body').animate({
	//		scrollTop: 0
	//	}, 500);
	//	return false;
	//});
	//function b(){
	//	t = $(document).scrollTop();
	//	if(t > 200){
	//		$('.top-button').show();
	//	}else{
	//		$('.top-button').hide();
	//	}
	//}
	//$(window).scroll(function(e){
	//	b();
	//});

	$('.full-bg').addClass('show');

	//nav-master
	$('body').on('click','.nav-master',function(){
		$(this).toggleClass("toggled").siblings().removeClass("toggled");
	});

	//lang-box
	$('.lang-box').click(function(){
		$('.lang-box').toggleClass('active');
	});

	//nav-btn
	$('.bar-btn').click(function(){
		$(this).toggleClass('active');
		$('.nav-main').toggleClass('active');
	});

	$('.nav-main .sub-tab-a').click(function(){
		$('.bar-btn').trigger('click');
	});

	//sub-nav
	$('.sub-nav li').click(function(){
		$('.sub-nav').toggleClass('toggled');
	});

});

//自定义生成分页
function createPagination(item,num,swiper){
	var parent = $(item),
		sumNum = parent.find('.swiper-slide').length,
		pageDom = parent.find('.swiper-pagination');
	var pageNum = sumNum % num > 0 && Math.floor(sumNum / num) > 0 ? Math.floor(sumNum / num) + 1 : Math.floor(sumNum / num);
	var html = '<span class="hs-bullet swiper-visible-switch hs-bullet-active"></span>';

	for(var i = 0; i<pageNum-1;i++){
		html += '<span class="hs-bullet swiper-visible-switch"></span>';
	}
	$(html).appendTo(pageDom);
	$(pageDom).find('.hs-bullet').click(function(){
		var index = $(this).index();
		$(this).addClass('hs-bullet-active').siblings().removeClass('hs-bullet-active');
		console.log(index*num);
		swiper.slideTo(index * num);
	})
}

//更改分页器颜色
function changeColor(colorarr, index){
	if (colorarr[index] == 1) {
		$('.fullscreen-swiper>.swiper-pagination').addClass('dark');
	} else {
		$('.fullscreen-swiper>.swiper-pagination').removeClass('dark');
	}
}



//hash切换页面start
$(window).on("hashchange", hashChange);
$(window).on("load", hashChange);

//hash页面的默认index
var hashIndex = 0;
function hashChange(){
	var hash = location.hash;
	setTimeout(function(){
		if(hash != '' && $("[data-target="+ hash +"]").length > 0) $("[data-target="+ hash +"]").trigger('initclick');
	},20)
}

$(function(){
	function subnavClickHandle(target, index){
		if(hashIndex != index){
			hashIndex = index;
			location.hash = target;
			//排序
			var navArr = $('.hash-nav .sub-nav-a').splice(0);

			navArr.sort(function(a,b){
				var indexOld = parseInt($(a).attr('data-target').substr(2))-1;
				var indexNew = parseInt($(b).attr('data-target').substr(2))-1;
				return indexOld - indexNew;
			});
			var activeNavArr = navArr.splice(index,1);
			var navArr = activeNavArr.concat(navArr);

			$('.hash-nav').html($(navArr));

			$('.tab-content-list .content-item').eq(index).addClass('current').siblings().removeClass('current');
		}
	}
	$('.hash-nav').on('click','.sub-nav-a',function(){
		var target = $(this).attr('data-target'),
			index = parseInt(target.substr(2))-1;
		subnavClickHandle(target,index);
		$('.hash-nav').toggleClass('toggled');
	});
	$('.hash-nav').on('initclick','.sub-nav-a',function(){
		var target = $(this).attr('data-target'),
			index = parseInt(target.substr(2))-1;
		subnavClickHandle(target,index);
	})
});
//hash切换页面end


