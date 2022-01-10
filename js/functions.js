$(document).ready(function(){

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

$(window).on('load', function(){
  $grid.masonry('layout');
  });
