// =======================banner slider=========================
$('.carousel-wrap .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots:true,
  nav: false,
  lazyLoad: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// =======================collection slider=========================
 $('.slick', '.vertical-slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1
});