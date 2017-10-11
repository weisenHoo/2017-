//必须的js代码
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	}, 
  	onSlideChangeEnd: function(swiper){ 
    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});
//必须的js代码结束

//音乐控制

//抓元素
var music = document.getElementById('music');
var music_bg = music.getElementsByClassName('music_bg')[0];
var music_pic = music.getElementsByClassName('music_pic')[0];
var aud = music.getElementsByTagName('audio')[0];
   		
//定义音乐的状态变量
var music_sta = 1;
music.onclick = function(){  	
  	if(music_sta==1){
//		让背景gif隐藏
        music_bg.style.cssText = 'display: none;';
//      停止音乐图标的旋转
		music_pic.style.cssText = 'animation: none;';
//		停止播放音乐
		aud.pause();
		
		music_sta = 2;
   }else if(music_sta==2){
//		让背景gif显示
        music_bg.style.cssText = 'display: block;';
//      让音乐图标的旋转
		music_pic.style.cssText = 'animation: run 2s linear infinite;';
//		播放音乐
		aud.play();
		
		music_sta = 1;
    }
}
//音乐控制结束

