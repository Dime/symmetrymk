function stickyNav(element) {
  var mainNav    = $(element);
  var topOffset = mainNav.offset().top;

  setupStickyNav = function() {
    var scrolled  = $(window).scrollTop();
    if(scrolled > topOffset) {
       mainNav.addClass('sticky');
    }else{
       mainNav.removeClass('sticky');
    }
  }

  $(window).scroll(setupStickyNav);
  $(document).ready(setupStickyNav);
}
