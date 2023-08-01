
$(function(){
    // paragrap hide
    $("p").click(function(){
        $(this).hide();
    });

    // click button toggle
    $('.hide').click(function(){
        $('.box').hide(500);
        $('.show').removeClass('d_none')
        $('.hide').addClass('d_none')
    });
    $('.show').click(function(){
        $('.box').show(500);
        $('.show').addClass('d_none')
        $('.hide').removeClass('d_none')
    });
    $('.Toggle').click(function(){
        $('.box').toggle(500);
    });

    // dropmenu 
    $('.dropmenu_active').click(function(){
        $('.dropmenu').slideToggle();
    });

    $('.collapse_btn').click(function(){
        $('.menu').slideToggle();
    });
    
    $('.sidebar_btn').click(function(){
        $('.sidebar_con').toggleClass('ml');
    });



});


// diable inspect/ view code
//   $(document).bind("contextmenu",function(e) {
//     e.preventDefault();
//   });
//   $(document).keydown(function(e){
//     if(e.which === 123){
//       return false;
//   }
//   });
