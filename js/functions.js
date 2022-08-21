function displayTime() {
    var time = moment().tz('America/New_York').format('HH:mm') + " " + "est";
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();

    $slideshow = $('.slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 250,
      // speed: 0,
      cssEase: 'linear',
      // fade: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // infinite: true,
      lazyLoad: 'ondemand',
    });


    $(window).resize(function(){
      $('.slideshow')[0].slick.refresh();
    });

    // var lightbox = new PhotoSwipeLightbox({
    //   arrowPrevSVG: leftArrowSVGString,
    //   arrowNextSVG: leftArrowSVGString,
    //     gallery: '.test-gallery',
    //     children: 'a',
    //     // dynamic import is not supported in UMD version
    //     pswpModule: PhotoSwipe
    //     });
    //   lightbox.init();

    var leftArrowSVGString = '←';
    var rightArrowSVGString = '→';
    var closeSVGString = 'X';

    var options = {
      arrowPrevSVG: leftArrowSVGString,
      arrowNextSVG: rightArrowSVGString,
      closeSVG: closeSVGString,
      arrowPrev: false,
      arrowNext: false,
      // arrowKeys: false,
      counter: false,
      zoom: false,
      // close: false,
      bgOpacity: 0.8,
      bgClickAction: 'close',
      padding: { top: 25, bottom: 25, left: 50, right: 50 },

      mouseMovePan: true,

      initialZoomLevel: 'fit',
      secondaryZoomLevel: 1.5,
      maxZoomLevel: 1,

      // // to apply styles just to this instance of PhotoSwipe
      // mainClass: 'pswp--custom-icon-colors',

      gallery: '.photoswipe',
      children: 'a',
      pswpModule: PhotoSwipe
    }

    var lightbox = new PhotoSwipeLightbox(options);
    lightbox.init();


});
