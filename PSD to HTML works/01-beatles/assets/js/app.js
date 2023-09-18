
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
    

    //COunter UP start
    $('.counter').counterUp({
        delay: 10,
        time: 100000
    });
    //COunter UP end

    // countdown start 
    (() => {
        // Specify the deadline date
        const deadlineDate = new Date('August 10, 2023 23:59:59').getTime();
    
        // Cache all countdown boxes into consts
        const countdownDays = document.querySelector('.countdown__days .number');
        const countdownHours = document.querySelector('.countdown__hours .number');
        const countdownMinutes = document.querySelector('.countdown__minutes .number');
        const countdownSeconds = document.querySelector('.countdown__seconds .number');
    
        // Update the count down every 1 second (1000 milliseconds)
        setInterval(() => {
            // Get current date and time
            const currentDate = new Date().getTime();
    
            // Calculate the distance between current date and time and the deadline date and time
            const distance = deadlineDate - currentDate;
    
            // Calculations the data for remaining days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);
    
            // Insert the result data into individual countdown boxes
            countdownDays.innerHTML = days;
            countdownHours.innerHTML = hours;
            countdownMinutes.innerHTML = minutes;
            countdownSeconds.innerHTML = seconds;
        }, 1000);
    })();
    // countdown end

    // slider-> slick Slider, Owl Carousel, Swiper JS,

    
    // swiper slider start
        // default:
        // var swiper = new Swiper(".mySwiper", {});
        // navigation:
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
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


