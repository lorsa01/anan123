
$(document).ready(function () {
    $(".loading").addClass("disable");
});

function menu() {
    $(".menu").toggleClass("active");
    $(".shadow").toggleClass("active");
    $(".header_wrapper ul").toggleClass("active");
    $("body").toggleClass("overflow-hidden");

    $(window).scrollTop(0);
}

$(document).ready(function () {
    $(".slick-dots").each(function () {
        $(this).addClass("container")
    })
})



// slider

$('.banner_slider').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});