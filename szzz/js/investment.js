$(function  () {
	//选项卡切换
	$('#tab li').each(function(i, e) {
		$(this).hover(function() {
			var _this = $(this);
			_this.addClass('actives').siblings().removeClass('actives');
			$('.tab-content').eq(i).removeClass('dn').siblings().addClass('dn');
			$('#tab .on').stop().animate({'left' : i * 106 + 'px'},200);
		})
	});
	
	//倒计时
	var timer=setInterval(getTimes,1000);
	function getTimes () {
		var time=$('.times').attr('time');
		var endTime=new Date(time).getTime();
		var nowTime=new Date().getTime();
		var t=endTime-nowTime;
		var d,h,m,s;
		if (t>0) {
			d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 %60 );
            if(s<10){
            	s='0'+s
            }
            if(m<10){
            	m='0'+m
            }
            if(h<10){
            	h='0'+h
            }
        	$('.times').html(d+'天'+h+'小时'+m+'分钟'+s+'秒')
		} else{
		clearInterval(timer)
		}
	}
	
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
	
//	借款详情进度
	$(".long").height($(".getH1").height()+$(".getH2").height()+64);
	
	
	$(".lightgallery").lightGallery();//调用画廊插件
	Slide('.slide3','合同凭证');
	Slide('.slide2','借款资料');
	Slide('.slide1','现场图片');
	
	function Slide (obj,text) {//图片左右滑动方法
		var thisObj=$(obj),
			eClick=thisObj.parent().find('#on'),
			pre=thisObj.parent().find('#pre'),
			next=thisObj.parent().find('#next'),
			a=thisObj.find("a"),
			size=a.size(),
			wrpWidth=size*a.width(),
			num=Math.ceil(size/5),
			ii=0;
		thisObj.width(wrpWidth);
		
		var ielm='';
		for (var i=0;i<num;i++) {
			ielm+="<i></i>"
		}
		eClick.html(ielm);
		for (var i = 0; i < size; i++) {
			$("<p>"+text+(i+1)+"</p>").appendTo(a[i])
		};
		eClick.find("i").eq(ii).css("backgroundColor","#ff8400");
		eClick.find("i").each(function  (i) {
			$(this).click(function  () {
				move(3,i);
			});
		});
		pre.click(function  () {
			move(2)
		});
		next.click (function () {
			move(1)
		}) ;
		function move (a,b) {
			if (a==1&&ii<num-1) {
				ii+=1;
			} else if(a==2&&ii>0){
				ii-=1;
			}else if(a==3&&ii<num){
				ii=b;
			};
			var left=1160*ii
			thisObj.stop().animate({"marginLeft":-left},500);
			eClick.find("i").eq(ii).css("backgroundColor","#ff8400").siblings().css("backgroundColor","#ccc");
		};
	};
});