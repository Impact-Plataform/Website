$(document).ready(function() {
  $('.items').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              autoplaySpeed: 1800,
              speed: 300
          }
      }]
  });

  
$('.dep').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});