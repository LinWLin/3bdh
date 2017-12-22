$(function(){
	$('.bar-page-up-icon').click(function(event) {
		$('body,html').animate({scrollTop:0},500);
	});

	$(".bar-page-down-icon").click(function(){
        $("html,body").animate({
            scrollTop: document.body.clientHeight
        },500);
    })

	$('.login').click(function(event) {
		$('.loginContainer').show().addClass('animated fadeIn');
		$('body').css('overflow','hidden');
	});

	$('.close-btn').click(function(event) {
		$('.loginContainer').css('display','none').removeClass('fadeIn').addClass('fadeOut');
		$('body').css('overflow','auto');
	});

	$('.loginContainer .mask').click(function(event) {
		$('.loginContainer').css('display','none').removeClass('fadeIn').addClass('fadeOut')
		$('body').css('overflow','auto');
	});


	$('.logon>span').click(function(event) {
		$('.registerWarpper').addClass('active').siblings().removeClass('active');
	});

	$('.pass-login>span').click(function(event) {
		$('.passwordLogin').addClass('active').siblings().removeClass('active');
	});

	$('.phone-login>span').click(function(event) {
		$('.mobileLogin').addClass('active').siblings().removeClass('active');
	});

	$('.member-menu').delegate('li:not(:last-child)', 'click', function(event) {
		var _index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.member-menu-item').eq(_index).addClass('active').siblings().removeClass('active')
	});


	$('.menu').hover(function() {
		$('.scanning-warpper').show().addClass('animated fadeIn');
	}, function() {
		$('.scanning-warpper').hide().removeClass('fadeIn');
	});
	
	$('.forget_password>span').click(function(event) {
		$('.changePwd').addClass('active').siblings().removeClass('active');
	});
	var countdown = 60;//验证码倒计时默认60s
	$(".get-code").click(function(){
        // var code = $(".code").val();
        var timer,
        	obj = $(this);
        obj.attr("disabled",true); 

        timer=setInterval(function(){
	        if (countdown == 0 || countdown == 60) {  
	            if(countdown == 0){
	                countdown = 60;
	                obj.attr("disabled",false); 
	                obj.html("发送验证码");   
	                clearInterval(timer);
	                return;
	            } else {
	                obj.html("重新发送(" + countdown +"s)"); 
	                countdown--; 
	            }
	        } else { 
	            obj.html("重新发送(" + countdown +"s)"); 
	            countdown--; 
	        } 
        },1000);
    });

    $(window).scroll( function() {

	  var nHeight = $('#header').height();
	  var sTop = $(window).scrollTop();
	  var result = nHeight - sTop;
	  if(result <= 0){
	    $('.fixed_head').css({
	    	'display':'block'
	    }).addClass('animated fadeInDown')
	    $('.loginbox').css({
	    	'position':'fixed',
	    	'right':'50%',
	    	'marginRight':'-600px',
	    	'top':0,
	    	'zIndex':'1000'
	    }).addClass('animated fadeInDown')

	    $('.userinfo').css({
	    	'position':'fixed',
	    	'top':'0',
	    	'right':'50%',
	    	'marginRight':'-600px',
	    	'zIndex':'1000'
	    }).addClass('animated fadeInDown')
	  }else {
	    $('.fixed_head').css({
	    	'display':'none'
	    }).removeClass('fadeInDown')
	    $('.loginbox').css({
	    	'position':'absolute',
	    	'right':0,
	    	'marginRight':'0'
	    }).removeClass('fadeInDown')
	    $('.userinfo').css({
	    	'position':'absolute',
	    	'right':'0',
	    	'marginRight':'0px',
	    }).removeClass('fadeInDown')

	  }

	});

    $('.userNameId').on('blur', function(event) {
    	if($(this).val()===""){
    		$(this).addClass("verif_error");  
	        $(this).next().addClass('active').find('.err_msg').html("用户名不能为空");
        }else {
        	$(this).removeClass("verif_error");
        	$(this).next().removeClass('active').find('.err_msg').empty(); 
        }

    });
    $(".userPwd").blur(function(){  
        var reg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,18}$/;  
        if($(this).val()==''){
        	$(this).addClass("verif_error");  
            $(this).next().addClass('active').find('.err_msg').html("密码不能为空！"); 
        } else if (!reg.test($(this).val())) {  
            $(this).addClass("verif_error");  
            $(this).next().addClass('active').find('.err_msg').html("格式有误，请输入6~18位的数字、字母或特殊字符！"); 
        } else {  
            $(this).removeClass("verif_error");  
            $(this).next().removeClass('active').find('.err_msg').empty();  
        }  
    }); 

    $('.userPhone').blur(function(){  
        var reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)  
        var reg2 = /^[0-9]+$/; 
        if( $(this).val()==""|| $(this).val()=="请输入您的手机号") {   
            $(this).addClass("verif_error");  
            $(this).next().addClass('active').find('.err_msg').html("请输入您的手机号"); 
        } else if(!reg2.test($(this).val())){
        	$(this).addClass("verif_error"); 
            $(this).next().addClass('active').find('.err_msg').html("手机号码只能是数字");
        } else if($(this).val().length<11) {     
            $(this).addClass("verif_error"); 
            $(this).next().addClass('active').find('.err_msg').html("手机号长度有误！");
        } else if(!reg.test($(this).val())) {     
            $(this).addClass("verif_error"); 
            $(this).next().addClass('active').find('.err_msg').html("手机号不存在!");   
        } else {  
            $(this).removeClass("verif_error"); 
            $(this).next().removeClass('active').find('.err_msg').empty();  
        }  
    }); 

    $(".phonekey").blur(function(){  
        var reg=/^[A-Za-z0-9]{4}$/;  
        if( $(this).val()=="" || $(this).val()=="请输入验证码") {  
            $(this).addClass("verif_error");  
            $(this).next().next().addClass('active').find('.err_msg').html("请填写验证码");  
        } else if(!reg.test($(this).val())) {  
            $(this).addClass("verif_error");  
            $(this).next().next().addClass('active').find('.err_msg').html("验证码输入有误！");  
        } else {  
            $(this).removeClass("verif_error");  
            $(this).next().next().removeClass('active').find('.err_msg').empty();  
        }  
    });  

})