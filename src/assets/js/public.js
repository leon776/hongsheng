$(function(){
	//go top
	b();
	$('.top-button').click(function(){
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	function b(){
		t = $(document).scrollTop();
		if(t > 200){
			$('.top-button').show();
		}else{
			$('.top-button').hide();
		}
	}
	$(window).scroll(function(e){
		b();
	});

	$('.full-bg').addClass('show');

	//nav-master
	$('body').on('mouseenter','.nav-master',function(){
		$(this).removeClass("nobg").addClass("hover").siblings().addClass("nobg");
	});
	$('body').on('mouseleave','.nav-master',function(){
		$(this).removeClass("hover").siblings().removeClass("nobg");
	});

	//lang-box
	$('.lang-box').hover(function(){
		$('.lang-box').toggleClass('active');
	})
	$('.lang-li .item').click(function() {
		var lang = $(this).data('lang');
		document.cookie = 'lang=' + lang;
		location.reload();
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
		swiper.swipeTo(index * num);
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

function updatePagination(item,num,index){
	var parent = $(item),
		sumNum = parent.find('.swiper-slide').length,
		pageDom = parent.find('.swiper-pagination .hs-bullet');
	var pageNum;
	if(index + num == sumNum){
		pageNum =  Math.ceil(sumNum / num);
		pageDom.eq(pageNum-1).addClass('hs-bullet-active').siblings().removeClass('hs-bullet-active');
		return;
	}
	if(index < num){
		pageNum = 0;
		pageDom.eq(pageNum).addClass('hs-bullet-active').siblings().removeClass('hs-bullet-active');
		return;
	}else {
		pageNum = Math.floor(index / num);
	}
	pageDom.eq(pageNum).addClass('hs-bullet-active').siblings().removeClass('hs-bullet-active');
}


$(window).on("hashchange", hashChange);
$(window).on("load", hashChange);

function hashChange(){
	var hash = location.hash;
	setTimeout(function(){
		if(hash != '' && $("[data-target="+ hash +"]").length > 0) $("[data-target="+ hash +"]").trigger('click');
	},20)
}



