function scrollSpy(menuNav, container) {
  scrollItems = $(menuNav + ' a').map(function(){
    var item = $($(this).attr("href"));
      if (item.length) { return item; }
  });

  topSectionHeight = $(container).outerHeight()+15;
  menuItems = $(menuNav).find('a');

  $(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topSectionHeight;

    var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
     });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems.removeClass("active");
    if(fromTop > topSectionHeight){
      menuItems.end().find("a[href=#"+id+"]").addClass("active");
      $('#work-link').html('');
      selectedSectionName = $('.js-smooth.active').text();
      $('#work-link').html(selectedSectionName).addClass("active");
    }
  });
}
