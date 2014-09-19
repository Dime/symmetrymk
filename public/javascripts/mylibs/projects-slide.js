$(document).ready(function(){
  // projects scrolling
  $(document).on('click', '#next-slide, #previous-slide', function(e){
    e.preventDefault();
    link = $(e.target).parent()[0].href;
    targetId = $(e.target).parent()[0].id;
    if(targetId == 'next-slide'){
      scrollProjectPage("-9999", "9999");
    }else{
      scrollProjectPage("9999", "-9999");
    }
    $('#slide-nav').load(link + ' #slide-nav a');
    $('#mini-nav').load(link + ' #mini-nav');
  });

  function scrollProjectPage(animateLeft, positionLeft){
    $('section.case .wrapper').animate({ left: animateLeft }, 800, function(){
      $('section.case').load(link + ' section.case .wrapper', function(){
        $('section.case .wrapper').css("left", positionLeft + "px");
        $('section.case .wrapper').animate({left: "0"}, 600);
      });
    });
  }
});
