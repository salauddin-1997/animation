(function ($) {
    'use strict'

    // Close Button style 
   
    $('.menu i').css({
        'color' : '#fff',
        'float' : 'right',
        'cursor' : 'pointer'
    });

    // Menu & add or remove class
     $('.header-area i').on('click', function () {
        $('.menu').animate({'left' : 0}, 1000);
        $('.header-area').addClass('b-color');
     }); 


     $('.menu i').on('click', function () {
        $('.menu').animate({'left' : '-300px'}, 1000);
        $('.header-area').removeClass('b-color');
     });


// AOS section
    $("section").attr({ 
	"data-aos":"fade-up",
    "data-aos-anchor-placement":"top-center"

    });

    AOS.init({
    	// Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


//Watter Ripples

    $('.box-0,.box-1').ripples({
        'dropRadius' : 5,
        'perturbance' : 0.01,
        'interactive' : true,
        'imageUrl' : null,
        'resolution	' : '256',
        'crossOrigin' : " "
        
    });



    //========== isotope==========

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-item'
    }
  })
  
  //========== isotope button active==========
  
  $('.work-button button').on('click', function() {
      $('.work-button button').removeClass('active');
      $(this).addClass('active');
  });
  


// ==========swiper start==========

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      // autoplayHoverPause:true,
      grabCursor: true,
      speed: 6000,
      centeredSlides: true,
      slidesPerView: 'auto',
      // dynamicBullets: true,
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
      	delay: 2500,
      	disableOnInteraction: true,
      },
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
      // Navigation arrows
    //   navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
 });




// ==========Digital-clock start==========
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}
showTime();



// ==========counter start==========
jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });


// ==========lightbox start==========
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })


// ==========countdown start==========
const cd = new Date().getFullYear() + 1
        $('#countdown').countdown({
            year: cd
        });



// ==========owl-carousel start==========
var owl = $('.owl-carousel');
owl.owlCarousel({
	rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



// ==========scroll Top  start==========
 // scroll Top 
    $(window).scroll(function () {
        var durotto = $(window).scrollTop(); 
        $('.box-10').text(durotto);

        if (durotto > 400) {
            $('.arrow').fadeIn();
        }
        else{
            $('.arrow').fadeOut();
        }
    });
    

    $('.arrow').on('click', function () {
        $('html').animate({'scrollTop' : 0}, 1000);

    });





}) (jQuery);
