console.log("Жаваскрипт жасап тұр"),jQuery(document).ready(function($){var slideCount=$("#slider ul li").length,slideWidth=$("#slider ul li").width(),slideHeight=$("#slider ul li").height(),sliderUlWidth=slideCount*slideWidth;$("#slider").css({width:slideWidth,height:slideHeight}),$("#slider ul").css({width:sliderUlWidth,marginLeft:-slideWidth}),$("#slider ul li:last-child").prependTo("#slider ul"),$("a.control_prev").click(function(){$("#slider ul").animate({left:+slideWidth},200,function(){$("#slider ul li:last-child").prependTo("#slider ul"),$("#slider ul").css("left","")})}),$("a.control_next").click(function(){$("#slider ul").animate({left:-slideWidth},200,function(){$("#slider ul li:first-child").appendTo("#slider ul"),$("#slider ul").css("left","")})})});