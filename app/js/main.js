$(function(){

  $('.nav__btn').on('click', function(){
    $('.nav__btn').toggleClass('nav__btn--active');
    $('.menu').toggleClass('menu--active');
  });
  
  $('.top-slider').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    /* responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ] */
  });

  $('.services-slider').slick({
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 541,
        settings: {
        slidesToShow: 1,
        }
      },
      {
        breakpoint: 321,
        settings: {
        slidesToShow: 1,
        arrows:false,
        }
      },
    ]
  });

  $('.slider-team').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 881,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 641,
        settings: {
        slidesToShow: 1,
        }
      },
      {
        breakpoint: 321,
        settings: {
        slidesToShow: 1,
        arrows:false,
        }
      },
    ]
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
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    asNavFor: '.name-post',
  });

  $('.name-post').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.post-slider',
  });

  var mixer = mixitup('.portfolio__cases');
});