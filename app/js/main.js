$(function(){
  
  $('.top-slider').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
  });

});