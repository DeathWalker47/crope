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

  $('.services-slider').slick({
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
  });

  $('.slider-team').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
  });

  var mixer = mixitup('.portfolio__cases');
});