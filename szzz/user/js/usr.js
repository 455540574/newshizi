/* 上传头像 */
$(window).load(function () {
    (function () {

	$(".usr-info .u-fl").css("cursor", "pointer").click(function (event) {
            var imglist = ['images/user-img/big01.jpg', 'images/user-img/big02.jpg', 'images/user-img/big03.jpg', 'images/user-img/big04.jpg', 'images/user-img/big05.jpg', 'images/user-img/big05.jpg', 'images/user-img/big05.jpg', 'images/user-img/big05.jpg', 'images/user-img/big05.jpg', 'images/user-img/big05.jpg'];
            var html = "<div class='headslip'><i class='iclose'></i><ul>" + $.map(imglist, function (item, index) { return "<li><img src='" + item + "'><input type='radio' name='headlist' value='" + index + "'></li>" }).join("") + "</ul></div>";
            var overlay = "<div id='headslip-overlay' style='z-index:998; opacity:1; transition: all 0.2s ease 0s;height:100%;width:100%;position:fixed;top:0;left:0;'></div>";

            $('body').append(overlay);
            $('.usr-info').append(html);
            $(this).parent().find('.headslip').slideDown(400);

            $(".usr-info .headslip .iclose").click(function (event) {
                $(this).parent().slideUp(400, function () {
                    $(this).empty().remove();
                    $('#headslip-overlay').empty().remove();
                });
                var headsrc = $('.usr-info .u-fl').attr('src');
                var avatar = (headsrc.match(/\d+/)[0]);
                $.post('/member/setavatar/' + avatar);

            });
            $(".headslip li").click(function (event) {
                $(this).parent().find(":radio[name='headlist']").prop('checked', false);
                $(this).find('input:radio').prop("checked", true);
                var headsrc = $(this).find('img').attr('src');
                $('.usr-info .u-fl').attr('src', headsrc);
            });
        });


    })();


    var hh = $(window).height();

    $(".dianji").click(function () {
        $(".invest_form01").stop().fadeIn(300);
        $("#hidebg").css({ 'display': 'block', 'height': hh });
    })
    $(".invest_form01 h1 i").click(function () {
        $(".invest_form01").stop().fadeOut(300);
        $("#hidebg").css({ 'display': 'block', 'height': 0 });
    });
})


/* jQuery placeholder, fix for IE6,7,8,9 */
var JPlaceHolder = {
    _check: function () {
        return 'placeholder' in document.createElement('input');
    },
    init: function () {
        if (!this._check()) {
            this.fix();
        }
    },
    fix: function () {
        jQuery(':input[placeholder]').each(function (index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({ position: 'relative', zoom: '1', border: 'none', background: 'none', padding: 'none', margin: 'none' }));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({ position: 'absolute', left: pos.left, top: pos.top, height: h, lienHeight: h, paddingLeft: paddingleft, color: '#bbbbbb' }).appendTo(self.parent());
            self.focusin(function (e) {
                holder.hide();
            }).focusout(function (e) {
                if (!self.val()) {
                    holder.show();
					holder.hide();
                }
            });
            holder.click(function (e) {
                holder.hide();
                self.focus();
            });
        });
    }
};
jQuery(function () {
    JPlaceHolder.init();
});


/* tab for IE6,7,8,9 */
$(function(){
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.usr-tabmian-wrap div.usr-tabmian').eq(liindex).fadeIn(0).siblings('div.usr-tabmian').hide();
		var liWidth = $('.title-list li').width();
		$('.usr-tab .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	});

/* tab for IE6,7,8,9 */
$(function(){
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.cal-tabmian-wrap div.cal-tabmian').eq(liindex).fadeIn(0).siblings('div.cal-tabmian').hide();
		var liWidth = $('.title-list li').width();
		$('.cal-tab .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	});


/* 点击下拉展开 */
$(document).ready(function () {
    $('.user-box').each(function () {
        var oBtn = $(this).find('h5');
        var oDiv = $(this).find('.hp_cont');
        oBtn.click(function () {
            $('.hp_cont').slideUp(200);
            $('.user-box').find('h5').removeClass('down');

            $('.user-safe h5').each(function () {
                var hFive = $(this);
                hFive.text(hFive.attr('title'));
            });
            if (oDiv.is(":visible")) {
                oDiv.slideUp(200)
            } else {
                oBtn.addClass("down").text('取消')
                oDiv.slideDown(300)
            }
        });
    });

});

$(document).ready(function () {
    $('.u-pro').each(function () {
        var oBtn = $(this).find('h5');
        var oDiv = $(this).find('.hp_cont');
        oBtn.click(function () {
            $('.hp_cont').slideUp(200);
            $('.u-pro').find('h5').removeClass('down');

            $('.u-pro h5').each(function () {
                var hFive = $(this);
                hFive.text(hFive.attr('title'));
            });
            if (oDiv.is(":visible")) {
                oDiv.slideUp(200)
            } else {
                oBtn.addClass("down").text('收起')
                oDiv.slideDown(300)
            }
        });
    });

});

/*
(function($) {  
  var placeholderfriend = {  
    focus: function(s) {  
      s = $(s).hide().prev().show().focus();  
      var idValue = s.attr("id");  
      if (idValue) {  
        s.attr("id", idValue.replace("placeholderfriend", ""));  
      }  
      var clsValue = s.attr("class");  
      if (clsValue) {  
        s.attr("class", clsValue.replace("placeholderfriend", ""));  
      }  
    }  
  }  
  
  //判断是否支持placeholder  
  function isPlaceholer() {  
    var input = document.createElement('input');  
    return "placeholder" in input;  
  }  
  //不支持的代码  
  if (!isPlaceholer()) {  
    $(function() {  
  
      var form = $(this);  
      var elements = form.find("input[type='text'][placeholder]");  
      elements.each(function() {  
        var s = $(this);  
        var pValue = s.attr("placeholder");  
        var sValue = s.val();  
        if (pValue) {  
          if (sValue == '') {  
            s.val(pValue);  
          }  
        }  
      });  
  
      elements.focus(function() {  
        var s = $(this);  
        var pValue = s.attr("placeholder");  
        var sValue = s.val();  
        if (sValue && pValue) {  
          if (sValue == pValue) {  
            s.val('');  
          }  
        }  
      });  
  
      elements.blur(function() {  
        var s = $(this);  
        var pValue = s.attr("placeholder");  
        var sValue = s.val();  
        if (!sValue) {  
          s.val(pValue);  
        }  
      });  
  
      var elementsPass = form.find("input[type='password'][placeholder]");  
      elementsPass.each(function(i) {  
        var s = $(this);  
        var pValue = s.attr("placeholder");  
        var sValue = s.val();  
        if (pValue) {  
          if (sValue == '') {  
            var html = this.outerHTML || "";  
            html = html.replace(/\s*type=(['"])?password\1/gi, " type=text placeholderfriend").replace(/\s*(?:value|on[a-z]+|name)(=(['"])?\S*\1)?/gi, " ").replace(/\s*placeholderfriend/, " placeholderfriend value='" + pValue + "' " + "onfocus='placeholderfriendfocus(this);' ");  
            var idValue = s.attr("id");  
            if (idValue) {  
              s.attr("id", idValue + "placeholderfriend");  
            }  
            var clsValue = s.attr("class");  
            if (clsValue) {  
              s.attr("class", clsValue + "placeholderfriend");  
            }  
            s.hide();  
            s.after(html);  
          }  
        }  
      });  
  
      elementsPass.blur(function() {  
        var s = $(this);  
        var sValue = s.val();  
        if (sValue == '') {  
          var idValue = s.attr("id");  
          if (idValue) {  
            s.attr("id", idValue + "placeholderfriend");  
          }  
          var clsValue = s.attr("class");  
          if (clsValue) {  
            s.attr("class", clsValue + "placeholderfriend");  
          }  
          s.hide().next().show();  
        }  
      });  
  
    });  
  }  
  window.placeholderfriendfocus = placeholderfriend.focus;  
})(jQuery);*/