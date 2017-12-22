/*
* @Author: Administrator
* @Date:   2017-11-03 16:37:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-11 14:16:08
*/

$(function(){
	$(".websiteNav").delegate('li', 'click', function(event) {
		var _index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.content-list').eq(_index).addClass('active').siblings().removeClass('active');
		$('.result-warpper-item').eq(_index).addClass('active').siblings().removeClass('active');
	})

	$(".webNavTab").delegate('div', 'click', function(event) {
		var _index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.web-listing').eq(_index).addClass('active').siblings().removeClass('active');
	});

	$('.websiteNav-content').delegate('.collect-btn', 'click', function(event) {
		if($(this).parent().hasClass('colled')){
			$(this).parent().removeClass('colled')
		}else {
			$(this).parent().addClass('colled')
		}
	});

    

    $('.auth-container').flexslider({
		animation:'slide',
        directionNav: false,//是否显示左右控制按钮
        pauseOnAction: false,
        controlNav: true
    });

	$('.adv-banner').flexslider({
		animation:'slide',
        directionNav: false,
        pauseOnAction: false,
        controlNav: false
    });

    $('.salon-box').flexslider({
		animation:'slide',
        directionNav: false,
        pauseOnAction: false,
        controlNav: true
    });

    $('.myShoucan').flexslider({
        animation:'slide',
        directionNav: false,//是否显示左右控制按钮
        pauseOnAction: false,
        controlNav: false   //是否显示控制菜单
    });

	var $this = $(".newsdata-list");
	var scrollTimer;
	$this.hover(function() {
		clearInterval(scrollTimer);
	}, function() {
		scrollTimer = setInterval(function() {
			scrollNews($this);
			$this.find("li:nth-child(2)").addClass('active').siblings().removeClass('active')
		}, 3000);
	}).trigger("mouseleave");

	function scrollNews(obj) {
		var lineHeight = obj.find("li:first").height(); 
		obj.animate({
			"top": -lineHeight
		}, 500, function() {
			obj.css({
				top: 0
			}).find("li:first").appendTo(obj);
		})
	}

	var $this2 = $(".min_adv-list");
	var scrollTimer2;
	$this2.hover(function() {
		clearInterval(scrollTimer2);
	}, function() {
		scrollTimer2 = setInterval(function() {
			scrollNews($this2);
		}, 6000);
	}).trigger("mouseleave");

	var $this3 = $(".authWarpper");
	var scrollTimer3;
	$this3.hover(function() {
		clearInterval(scrollTimer3);
	}, function() {
		scrollTimer3 = setInterval(function() {
			scrollNews($this3);
		}, 6000);
	}).trigger("mouseleave");

	
})
