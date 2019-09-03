jQuery(document).ready(function($) {
  var g_top = 0;
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    
    if ( top > g_top ) {
      $('nav').fadeOut(400);
    } else {
      $('nav').fadeIn(400);
    }
    
    g_top = top;    
  });
});