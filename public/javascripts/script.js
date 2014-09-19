$(document).ready(function(){

  $("iframe").on("mouseScroll", function(e){
    e.preventDefault();
  });
  // sticky navigation menu
  stickyNav('#header');

  // smooth scrolling
  smoothScroll('js-smooth');

  // scroll spy (highlight link as scrolling through the page)
  scrollSpy('#main-nav', '#spaced');

  // smooth scroll logo link only if menu is sticky
  $('#logo a').click(function(e) {
    if($(e.target).parents('header').hasClass('sticky')) {
      e.preventDefault();
      $('section#spaced').scrollintoview({ duration: 2000});
    }
  });

  // mobile menu toggle
  $('#menu-toggle').click(function(e){
    e.preventDefault();
    $('#main-nav').slideToggle();
  });

  // team photos click event
  $('#team li').click(function(e){
    listItem = $(e.target).parents('li');
    txtWrapper = $(listItem).children('.txtWrapper');
    $(txtWrapper).children('p').slideToggle();
    $(listItem).toggleClass('active');
  });

  function highlightNavLink(href) {
    $('#main-nav a').removeClass('active');
    $("#main-nav a[href='" + href + "']").addClass('active');
  }

  // Parallax
  // $(window).scroll(function(){
  //   $("#space").css({
  //     top: $(window).scrollTop()*.1*-1
  //   });
  //   $("#engine").css({
  //     top: $(window).scrollTop()*.3*-1
  //   });
  //   $("#stars-1").css({
  //     top: $(window).scrollTop()*.3*-1
  //   });
  //   $("#stars-2").css({
  //     top: $(window).scrollTop()*.2*-1
  //   });
  //   $("#stars-3").css({
  //     top: $(window).scrollTop()*.1*-1
  //   });
  // });
});

$(window).load(function(){
  $('.bwWrapper').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : false,
    // for the images with a fluid width and height
    responsive : true,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
      fadeIn: 200, // 200ms for fadeIn animations
      fadeOut: 800 // 800ms for fadeOut animations
    }
  });
});

// ScrollMagic

var controller;
$(document).ready(function($) {
  // init controller
  controller = new ScrollMagic();
});

$(document).ready(function($) {

  // Background animations

  var tween = TweenMax.to("#space", 6, {opacity: 1, parallax: 30});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);

  // Background parallax
  new ScrollScene({
    triggerElement: "#spaced",
    duration: $(window).height() + 300,
    offset: -150
  })
  .addTo(controller)
  .triggerHook("onCenter")
  .setTween(new TimelineMax().add([
    // TweenMax.fromTo("#spaced #big", 1, {top: "35%"}, {top: "45%", ease: Linear.easeNone}),
    TweenMax.to("#spaced #space", 1, {backgroundPosition: "0 50%", ease: Linear.easeNone})
  ]));


  // Spaced animations

  var tween = TweenMax.to("#animate0-1", 1, {opacity: 1, delay: 3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-2", 1, {opacity: 1, delay: 3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-1", 2, {opacity: 1});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-2", 2, {opacity: 1, delay: .3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-3", 2, {opacity: 1, delay: .6});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-4", 2, {opacity: 1, delay: .9});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-5", 2, {opacity: 1, delay: 1.2});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-6", 2, {opacity: 1, delay: 1.5});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-3-7", 2, {opacity: 1, delay: 1.8});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-4", 1, {opacity: 1, delay: 3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-5", 1, {opacity: 1, delay: 3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate0-6", 1, {opacity: .7, delay: 3});
  var scene = new ScrollScene({triggerElement: "#spaced"})
    .setTween(tween)
    .addTo(controller);

  // Work animations

  var tween = TweenMax.to("#animate1-1", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger1"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate1-2", .7, {opacity: 1, scale: 1, left: "55%"});
  var scene = new ScrollScene({triggerElement: "#trigger1"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate1-3", .8, {opacity: 1, scale: 1, left: "48%"});
  var scene = new ScrollScene({triggerElement: "#trigger1"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate1-4", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger1"})
    .setTween(tween)
    .addTo(controller);

  var tween = TweenMax.to("#animate2-1", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger2"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate2-2", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger2"})
    .setTween(tween)
    .addTo(controller);

  var tween = TweenMax.to("#animate3-1", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger3"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate3-2", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger3"})
    .setTween(tween)
    .addTo(controller);

  var tween = TweenMax.to("#animate4-1", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger4"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate4-2", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger4"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate4-3", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger4"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate4-4", .6, {opacity: 1, scale: 1, right: "70%"});
  var scene = new ScrollScene({triggerElement: "#trigger4"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate4-5", .6, {opacity: 1, scale: 1, right: "25%"});
  var scene = new ScrollScene({triggerElement: "#trigger4"})
    .setTween(tween)
    .addTo(controller);

  var tween = TweenMax.to("#animate5-1", .6, {opacity: 1, scale: 1, right: 0});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate5-2", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate5-3", .6, {opacity: 1, scale: 1, left: 0});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate5-4", .6, {opacity: 1, scale: 1, left: "70%"});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate5-5", .6, {opacity: 1, scale: 1, left: "60%"});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);
  var tween = TweenMax.to("#animate5-6", .6, {opacity: 1, scale: 1, left: "30%"});
  var scene = new ScrollScene({triggerElement: "#trigger5"})
    .setTween(tween)
    .addTo(controller);

  // show indicators (requires debug extension)
  // scene.addIndicators();
});


// Google Maps API

var map;
var ctContentString = "<h2>Siyelo <span>Cape Town</span></h2>" + "<p>Suite 401, 79 Roeland Street, Cape Town, 8001, South Africa</p>"
var ctInfoWindow = new google.maps.InfoWindow({
      content: ctContentString
  });

function addMarker(map){
  siyeloCT = new google.maps.LatLng(-33.929533,18.422235)
  marker = new google.maps.Marker({
    position: siyeloCT,
    map: map,
    title: "Siyelo Cape Town",
  });

  google.maps.event.addListener(marker, 'click', function() {
    ctInfoWindow.open(map,marker);
  });
}

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-33.929533,18.422235),
    scrollwheel: false,

  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  addMarker(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Custom input type=file
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};
