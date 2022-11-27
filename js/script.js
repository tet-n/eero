$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    // slidesToShow: 1;
    // slidesToScroll: 1;
    speed: 500,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // infinite: false,
    draggable: false,
    waitForAnimate: false,
  });
});
