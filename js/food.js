$(document).ready(function () {
    $("#menuicon").click(function(){
        $(this).toggleClass('fa-times');
        $('.bar').toggleClass('nav-toggle');
    })
    $("#breakfast").click(function(){
        $("#menu-img2,#menu-img3,#menu-img4").hide();
        $("#menu-img").fadeIn(1000);
        
    })
    $("#launch").click(function(){
        $("#menu-img,#menu-img3,#menu-img4").hide();
        $("#menu-img2").fadeIn(1000);
        
    })
    $("#dinner").click(function(){
        $("#menu-img2,#menu-img,#menu-img4").hide();
        $("#menu-img3").fadeIn(1000);
        
    })

    $("#dessert").click(function(){
        $("#menu-img2,#menu-img3,#menu-img").hide();
        $("#menu-img4").fadeIn(1000);
       
    })
    $('header .bar ul li a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $(".arrowtop").click(function(){
        $("html,body").animate({
            scrollTop:$("#home").offset().top
        },1000);    })
    $(window).on('load scroll',function(){

        $('#menuicon').removeClass('fa-times');
        $('.bar').removeClass('nav-toggle');

        $('section').each(function(){
    
            let top = $(window).scrollTop();
            let   height = $(this).height();
            let   id = $(this).attr('id');
            let    offset = $(this).offset().top - 200;
    
            if(top > offset && top < offset + height){
                $('.bar ul li a').removeClass('active');
                $('.bar').find(`[href="#${id}"]`).addClass('active');
            }
    
        });
        
    });

});
