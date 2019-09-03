jQuery(document).ready(function($) {
  var g_top = 0;
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    
    if ( top > g_top ) {
      $('.header__top-wrap').fadeOut(400);
    } else {
      $('.header__top-wrap').fadeIn(400);
    }
    g_top = top;    
  });
});

$('.slider__content-rotate').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
});














// // $(function(){
// //   $('.slider__content-rotate').slick({
// //     nextArrow: '<button type="button" class="slick-btn slick-next">1</button>',
// //     prevArrow: '<button type="button" class="slick-btn slick-prev">2</button>',
// //   });
  
  
// //   });