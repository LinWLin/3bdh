$(function(){

	$('.collect_btn').click(function(event) {
		$('.member-menu-list').eq(3).addClass('active').siblings().removeClass('active');
		$('.member-menu-item').eq(3).addClass('active').siblings().removeClass('active');
	});

	$('.history_btn').click(function(event) {
		$('.member-menu-list').eq(4).addClass('active').siblings().removeClass('active');
		$('.member-menu-item').eq(4).addClass('active').siblings().removeClass('active');
	});

	$('.collect-operate span').click(function(event) {
		"use strict";
		if($('.content-list-disc').hasClass('operate')){
			$(this).html('<i class=\'iconfont icon-bianji\'></i> 管理').css({
				color:'#333',
				borderColor: '#ddd'
			});
			$('.content-list-disc').removeClass('operate');
			location.reload();
			sortable =  null;
		}else{
			$(this).html('完成').css({
				color:'#ff6900',
				borderColor: '#ff6900'
			});
			$('.content-list-disc').addClass('operate');
			var sortable =  new  Sortable(document.getElementsByClassName("member-collect-list")[0],{
				group: false,
				disabled: false,
				animation: 500,
				handle: '.content-list-disc-title',
				filter: '.delete-btn'
			});
		}
	});


	$('.delete-btn').on('click',function(event) {
		$('.delete-container').show().addClass('animated fadeIn');
		var _this=$(this);
		$('.determine').click(function(){
			_this.parent().parent().remove();
			$('.delete-container').hide();
		});
		$('.cancel').click(function(event) {
			$('.delete-container').hide();
		});
	});
	$('.delete-container .mask').click(function(event) {
		$('.delete-container').hide();
	});

	var countdown = 60;//验证码倒计时默认60s
	$("#yzm_btn").click(function(){
        // var code = $(".code").val();
        var timer,
        	obj = $(this);
        obj.attr("disabled",true); 

        timer=setInterval(function(){
	        if (countdown == 0 || countdown == 60) {  
	            if(countdown == 0){
	                countdown = 60;
	                obj.attr("disabled",false); 
	                obj.html("点击获取验证码");   
	                clearInterval(timer);
	                return;
	            } else {
	                countdown--; 
	                obj.html("重新发送(" + countdown +"s)"); 
	            }
	        } else { 
	            countdown--; 
	            obj.html("重新发送(" + countdown +"s)"); 
	        } 
        },1000);
    });

    $('.member-info-detail-footer-btn').click(function(event) {

    	if($(this).attr('type')==='button'){
    		$(this).html('保存').attr('type', 'submit');
    		$('.member-info-container input').removeAttr('disabled');
    	}else {
    		$(this).html('修改个人资料').attr('type', 'button');
    		$('.member-info-container input').attr('disabled','disabled');
    	}
    });

})