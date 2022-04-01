$(document).ready(function() {
    $('.items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 300,
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
});