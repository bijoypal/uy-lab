
$(function(){


    // slider-> slick Slider, Owl Carousel, Swiper JS,

    
    // swiper slider start
        // default:
        // var swiper = new Swiper(".mySwiper", {});
        // navigation:
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                // type: "progressbar",
              },
          });
       

    // swiper slider end

    

});


