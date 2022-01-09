$(document).ready(function(){
  var $slider = $('#landing-slideshow').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 0,
    cssEase: 'linear',
    fade: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    // lazyLoad: 'progressive',
    focusOnSelect: false,
  });

  $slider.find(".slick-slide").on("click", function(){
     $slider.slick("slickNext");
   });

  var $slider2 = $('.pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    cssEase: 'linear',
    fade: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    // lazyLoad: 'progressive',
  });

  $slider2.find(".slick-slide").on("click", function(){
     $slider2.slick("slickNext");
   });

   var $slider3 = $('.mini-slideshow').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     speed: 0,
     cssEase: 'linear',
     fade: true,
     infinite: true,
     prevArrow: false,
     nextArrow: false,
     // lazyLoad: 'progressive',
   });

   $slider3.find(".slick-slide").on("click", function(){
      $slider3.slick("slickNext");
    });

// GRID GRID GRID
   var $grid = $('.grid').masonry({
     itemSelector: '.box',
     columnWidth: '.box-sizer2',
     gutter: 32,
     // horizontalOrder: true,
     isFitWidth: true,
     transitionDuration: '0.2s'
   });
   // layout Masonry after each image loads
   $grid.imagesLoaded().progress( function() {
     $grid.masonry('layout');
   });

  // LIGHTBOX LIGHTBOX
  $('.popup').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery: {
      enabled: true
    },
    showCloseBtn: true,
    closeOnContentClick: true,

  });

});
