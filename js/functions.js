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
    focusOnSelect: true,
    // adaptiveHeight: true,
  });

$slider.find(".slick-slide").on("click", function(){
   $slider.slick("slickNext");
 });
});

$(document).ready(function(){
  var $slider = $('.pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    cssEase: 'linear',
    fade: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    lazyLoad: 'progressive',
    adaptiveHeight: true,

  });

$slider.find(".slick-slide").on("click", function(){
   $slider.slick("slickNext");
 });
});
