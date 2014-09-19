function smoothScroll(klass) {
  $('a.' + klass + '[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('section#' + target[0].id).scrollintoview({ duration: 1000});
      }
    }
  });
}
