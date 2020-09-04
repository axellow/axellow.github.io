$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	autoWidth:true,
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 3500,
  	center: true,
  	dots: true,
  	nav: false,
    smartSpeed: 1500,
    navText: ["<img src='img/slider/prev_sl.png'>", "<img src='img/slider/next_sl.png'>"]
  });

});