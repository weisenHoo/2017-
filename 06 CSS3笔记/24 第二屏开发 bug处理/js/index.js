document.addEventListener('touchmove', function (event) {
	event.preventDefault();
}, false);


//大总管变量
var c = 0;
//获得屏幕高度
var win_height = $(window).height();
//获得总屏数
var total = $("#container .box").length
	
$("body").swipeUp(function(){	
	c++;

//	判断如果是在第一屏，就不能向上滑
	if(c==total){ c = total-1; return;}
	
//	找到c号box里的元素,删掉他们的animated class
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
//	设置定时器,一秒钟后,给当前这一屏的元素加运动
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000);
	
//	计算应该到达的top值
	var t = c * -win_height;
//	将应该达到的top值赋值过去
	$("#container").css('margin-top',t);
})

$("body").swipeDown(function(){
	c--;
	
//	判断如果是在第一屏，就不能向上滑
	if(c==-1){ c = 0; return;}
	
//	找到c号box里的元素,删掉他们的animated class
	$("#container .box").eq(c).find('.ani').hide().removeClass('animated');
//	设置定时器,一秒钟后,给当前这一屏的元素加运动
	setTimeout(function(){
		$("#container .box").eq(c).find('.ani').show().addClass('animated');
	},1000);
	
//	计算应该到达的top值
	var t = c * -win_height;
//	将应该达到的top值赋值过去
	$("#container").css('margin-top',t);
})








