Polymer({
  is: 'home-page',
})

$(document).ready(function() {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    arrows:false,
  });
});