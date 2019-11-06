$('.header__menu-btn').on("click", function () {
  $('.header__menu > ul').slideToggle();
});

$(".header__slider").slick({
  dots: true,
  arrows: false
});

$(".video-slider__items").slick({
  dots: false,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
});

$('.life-team__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 721,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ]
});
$('.life-team__small').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.life-team__big',
  variableWidth: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 721,
      settings: "unslick",
    },
  ]
});

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});