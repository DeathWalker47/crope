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
  
  $('.case-slider').slick({
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
  });

  $('.post-slider').slick({
    infinite: false,
    speed: 900,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    asNavFor: '.name-post',
  });

  $('.name-post').slick({
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    asNavFor: '.post-slider',
  });

  var mixer = mixitup('.portfolio__cases');
});