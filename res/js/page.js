/**
 * Created by wangxingru on 2016/7/5.
 */

$(document).ready(function(){

	$('#anniversary').fullpage({
        'navigation': true,
        verticalCentered:false
    });

	/*page2中，图书翻页初始化*/
    $('#mybook').booklet({
        manual: false,
        overlays:true,
        width:  960,
        height: 631
	});

    /*p3设置转盘角度*/
    $('.p3_disc_block').each(function (i) {
        $(this).css({
            "transform":"rotate("+60*(i)+"deg)",
            "-webkit-transform":"rotate("+60*(i)+"deg)",
            "-moz-transform":"rotate("+60*(i)+"deg)",
            "-ms-transform":"rotate("+60*(i)+"deg)",
            "-o-transform":"rotate("+60*(i)+"deg)"
        })
    });



    //转盘事件
    var iDeg=0;
    function rotate(){
        iDeg++;
        if(iDeg==360){iDeg=0;}
        $('.p3_disc').css({
            "transform":"rotate("+(iDeg)+"deg)",
            "-webkit-transform":"rotate("+(iDeg)+"deg)",
            "-moz-transform":"rotate("+(iDeg)+"deg)",
            "-ms-transform":"rotate("+(iDeg)+"deg)",
            "-o-transform":"rotate("+(iDeg)+"deg)"
        });
        $('.p3_disc_txt_box').css({
            "transform":"rotate("+(iDeg)+"deg)",
            "-webkit-transform":"rotate("+(iDeg)+"deg)",
            "-moz-transform":"rotate("+(iDeg)+"deg)",
            "-ms-transform":"rotate("+(iDeg)+"deg)",
            "-o-transform":"rotate("+(iDeg)+"deg)"
        });
    }
    var play = setInterval(rotate,50);

    $('.p3_disc_block').hover(function(){;
        clearInterval(play);
        iDeg==iDeg;
    },function(){
        if($('.p3_disc_block').hasClass("p3_on")){
        }else{play = setInterval(rotate,50);}
    });

    $('.p3_disc_txt').hover(function () {
        clearInterval(play);
        $(this).addClass("p3_txt_color");
        var index = $(this).index();
        $('.p3_disc').children('.p3_disc_block').eq(index).addClass("p3_on").siblings().removeClass("p3_on");
    },function () {
        $(this).removeClass("p3_txt_color");
        play = setInterval(rotate,50);
        var index = $(this).index();
        $('.p3_disc').children('.p3_disc_block').eq(index).removeClass("p3_on");
    });





    /*p4轮播图*/
    jQuery(".p4_slide_box").slide({prevCell:".prev",nextCell:".next", mainCell:".p4_slide_cont .p4_slide",autoPage:true, effect:"leftLoop",autoPlay:true, vis:1});

	/*p5轮播图*/
    //jQuery(".p5_slide_box").slide({ prevCell:".prev",nextCell:".next", mainCell:".bd ul",effect:"leftLoop",autoPlay:true });

    //大图和文字切换
    jQuery(".txMovie").slide({ titCell:".focus_nav li", mainCell:".focus_pic", autoPlay:true,delayTime:100, startFun:function(i,p){
        //控制小图自动翻页
        var n = parseInt(p/4);
        for(var k = 0; k <= n; k++) {
            if(n*632 <= p*158){
                if(i == k*4){
                    jQuery(".txMovie #focus_smaillPic_list").css({left:-k*632});
                }
            }
        }
    } });
    //小图滚动
    jQuery(".txMovie").slide({ mainCell:".focus_nav ul",prevCell:".navPrev",nextCell:".navNext",effect:"left",vis:4,scroll:4,delayTime:0,autoPage:true,pnLoop:false});


    /*p6轮播图*/
    $(".p6_left_box").slide({mainCell:".bd ul",autoPlay:true});
    $(".p6_right_box").slide({mainCell:".bd ul",autoPlay:false});
    
    
    $('.open').click(function () {
        $(this).parent().hide();
        $(this).parent().next().show();
    });

    $('.p7_btn2').click(function () {
        if( !$('.page7').hasClass("page7_after") ){
            var expert_num = $('.expert_num').html();
            $('.expert_num').html(parseInt(expert_num)+1);
        }

        $('.p7_stroke1').animate({width:"360px"}, 1000);
        $('.p7_stroke2').delay(200).animate({height:"322px"}, 1000);

        $('.p7_stroke3').delay(200).animate({height:"322px"}, 1000);

        $('.p7_stroke4').delay(200).animate({width:"0"}, 1000);

        $('.p7_stroke5').delay(900).animate({width:"360px"}, 1000);

        $('.p7_stroke6').delay(1700).animate({width:"0"}, 1000);

        $('.p7_stroke7').delay(1500).animate({width:"360px"}, 1000);

        $('.p7_stroke8').delay(2000).animate({height:"322px"}, 1000);

        $('.p7_stroke9').delay(2200).animate({width:"0"}, 1000);


        setTimeout(function () {
            $('.page7').addClass("page7_after");
        },2500);
    });




});