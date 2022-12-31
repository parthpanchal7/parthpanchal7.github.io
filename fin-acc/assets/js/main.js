$('.service-slider .owl-carousel').owlCarousel({
	margin:20,
	loop:false,
	dots:false,
	nav:true,
	autoplay:false,
	autoplayTimeout:2500,
	autoplayHoverPause:false,
	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	responsive:{
		0:{items:1, dots:true},
		767:{items:2, dots:true},
		1000:{items:3}
	}
});

$('.team-slider .owl-carousel').owlCarousel({
	margin:20,
	loop:false,
	dots:true,
	nav:true,
	autoplay:false,
	autoplayTimeout:2500,
	autoplayHoverPause:false,
	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	responsive:{
		0:{items:1},
		767:{items:2},
		1000:{items:4}
	}
});