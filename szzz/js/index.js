
$(document).ready(function() {
	//数字滚动
	function  roll(id,speed) {
			var thisId=$("#"+id);
			var sVelue=thisId.attr("data-num");
			var nVelue=parseFloat(sVelue);
			var a=0;
			var timemer=setInterval(function  () {
				a+=speed;
				thisId.get(0).innerHTML=Math.floor(speed)===speed?a:format(a);
				if (a>nVelue) {
					clearInterval(timemer)
					thisId.get(0).innerHTML=Math.floor(speed)===speed?nVelue:format(nVelue);
				}
			},100);
		};
	function format (num) {
    		return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
		};
	roll('num1',945.67)
	roll('num2',425.67)	
	
	//轮播图
	$('#lightSlider').lightSlider({
		slideWidth: 1920,
		auto: true,
		pause: 4000,
		mode: 'slide'
	});

	//进度条
	var wid = $('.proval').html();
	$('.bgpro').find('i').animate({ width: wid }, 1500);

	//进度圆
	var oPro = $(".pro dt");
	var aPosition = [62, 124, 186, 248, 310, 372, 434, 496, 558];
	oPro.each(function(index, e) {
		var nProVal = parseFloat($(this).siblings("dd").text());
		var a = 0;
		switch(true) {
			case 0 < nProVal && nProVal <= 15:
				a = aPosition[0];
				break;
			case 15 < nProVal && nProVal <= 25:
				a = aPosition[1];
				break;
			case 25 < nProVal && nProVal <= 35:
				a = aPosition[2];
				break;
			case 35 < nProVal && nProVal <= 48:
				a = aPosition[3];
				break;
			case 48 < nProVal && nProVal <= 52:
				a = aPosition[4];
				break;
			case 52 < nProVal && nProVal <= 65:
				a = aPosition[5];
				break;
			case 65 < nProVal && nProVal <= 75:
				a = aPosition[6];
				break;
			case 75 < nProVal && nProVal <= 87:
				a = aPosition[7];
				break;
			case 87 < nProVal && nProVal < 100:
				a = aPosition[8];
				break;
			default:
				break;
		};
		if (index>=6) {
			oPro[index].style.backgroundPosition = -a + "px -61px";
		}else{
			oPro[index].style.backgroundPosition = -a + "px 0";
		};
	});

	//公告滚动
	var oDiv = document.getElementById('scrollnews');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var con = 0;
	$(oLi[0]).clone(true).appendTo($(oUl))
	if(con === oLi.length) {
		oUl.style.marginTop = 0;
		con = 0;
	}

	function fnMove() {
		con += 1;
		if(con === oLi.length) {
			oUl.style.marginTop = 0;
			con = 0;
		} else {}
		$(oUl).animate({ marginTop: con * -40 }, 500)
	}
	timer = setInterval(fnMove, 2000);

	oDiv.onmouseover = function() {
		clearInterval(timer);
	};

	oDiv.onmouseout = function() {
		timer = setInterval(fnMove, 2000);
	};

	//选项卡切换
	$('#tab li').each(function(i, e) {
		$(this).hover(function() {
			var _this = $(this);
			_this.addClass('actives').siblings().removeClass('actives');
			$('.tab-content').eq(i).removeClass('dn').siblings().addClass('dn');
		})
	});
	
	//	回到顶部
	var $aside=$('.aside .li4')
	$(window).scroll(function(){
		var t=$(this).scrollTop()
		if(t>700){
			$aside.fadeIn();
		}else{
			$aside.fadeOut();
		}
	});
	$aside.click(function(){
	$("body,html").stop().animate({scrollTop:0},600)
	});
});
