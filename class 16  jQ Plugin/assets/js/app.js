
$(function(){

    $(".back_to_top").click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);

    });

    // menu part scrolling function
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 450){
            $('.menu_part').addClass("bg_primary");
        }else{
            $('.menu_part').removeClass("bg_primary");
        }

        if(scrolling >500){
            $(".back_to_top").show(500);
        }else{
            $(".back_to_top").hide(500);
        }


    });


    
    // venobox start
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    
    new VenoBox({
        selector: '.my-video-links',
    });
    // venobox end
    
    
});