;
(function ($, window, document, undefined) {
	"use strict";

//  share links popup
	$('[data-share]').on('click', function () {

		var w = window,
			url = this.getAttribute('data-share'),
			title = '',
			w_pop = 600,
			h_pop = 600,
			scren_left = w.screenLeft != undefined ? w.screenLeft : screen.left,
			scren_top = w.screenTop != undefined ? w.screenTop : screen.top,
			width = w.innerWidth,
			height = w.innerHeight,
			left = ((width / 2) - (w_pop / 2)) + scren_left,
			top = ((height / 2) - (h_pop / 2)) + scren_top,
			newWindow = w.open(url, title, 'scrollbars=yes, width=' + w_pop + ', height=' + h_pop + ', top=' + top + ', left=' + left);

		if (w.focus) {
			newWindow.focus();
		}

		return false;
	});

	// preload
	window.paceOptions = {
		// Disable the 'elements' source
		elements: false,

		// Only show the progress on regular and ajax-y page navigation,
		// not every request
		restartOnRequestAfter: false
	};

	/////////////////////////////////
	/* 5 - Magnific Popup */
	/////////////////////////////////
	var groups = {};
	$('.js-magnific-popup .grid-item a').each(function () {
		var id = parseInt($(this).attr('data-group'), 10);

		if (!groups[id]) {
			groups[id] = [];
		}

		groups[id].push(this);
	});

	$.each(groups, function () {

		var that = $(this);

		that.magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			callbacks: {
				beforeOpen: function () {
					that.closest('html').addClass('popup');

				},
				afterClose: function () {
					that.closest('html').removeClass('popup');
				}
			},
			gallery: {
				enabled: true
			}
		})

	});

	/////////////////////////////////
	// count time
	/////////////////////////////////
	$('.f-count-down').each(function () {
		var that = $(this),
			finalDate = that.attr('data-final-date'),
			textDays = that.attr('data-days'),
			textHours = that.attr('data-hours'),
			textMinutes = that.attr('data-minutes'),
			textSeconds = that.attr('data-seconds');

		that.countdown(finalDate, function (event) {

			var format = event.strftime('%D');

			if (event.offset.totalDays > 0 && event.offset.totalDays < 10) {
				format = format.slice(1);
			}

			$(this).html(
				event.strftime('<div class="f-count-down-day">' + format + '<span>' + textDays + '</span></div>' +
					'<div class="f-count-down-hour-wrap"><div class="f-count-down-hour"> %H <span>' + textHours + '</span></div><div class="f-count-down-min"> %M <span>' + textMinutes + '</span></div><div class="f-count-down-second"> %S <span>' + textSeconds + '</span></div></div>')
			);
		});
	});

	/////////////////////////////////
	// search form
	/////////////////////////////////
	$( '.f-close-nav-pop-up' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( '.search-form-body, .nav-menu__tray-body, .nav-menu__log-in-body' ).fadeOut(400);
	});

	$( '.qdaf-search-dropdown' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( this ).parent().find( '.search-form-body' ).fadeToggle(400);
	});
	/////////////////////////////////
	// tray form
	/////////////////////////////////

	$( '.js-menu__tray > a' ).on( 'click', function ( e ) {
		e.preventDefault();

		var that = $( this ),
			elemBody = that.parent().find( '.nav-menu__tray-body' );

		if ( e.clientX > ( $( window ).width() / 2 ) ) {
			elemBody.addClass( 'nav-menu__tray-body_right' );
		}
		elemBody.fadeToggle(400);
	});

	$( '.js-menu__tray2 > a' ).on( 'click', function ( e ) {
		e.preventDefault();

		var that = $( this ),
			elemBody = that.parent().find( '.nav-menu__tray-body' );

		if ( e.clientX > ( $( window ).width() / 2 ) ) {
			elemBody.addClass( 'nav-menu__tray-body_right' );
		}
		elemBody.addClass( 'slide-right' ).show(400);
	});

	$( '.f-close-tray-body' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( this ).parent().fadeOut();
		$( '.nav-menu__tray-body_style2' ).show(400).removeClass( 'slide-right' );
	});

	/////////////////////////////////
	// log-in
	/////////////////////////////////
	$('#js__log-in > a').on('click', function (event) {
		event.preventDefault();
		var that = $(this);
		var elemBody = that.parent().find(".nav-menu__log-in-body");

		if (event.clientX > ($(window).width() / 2)) {
			elemBody.addClass("nav-menu__tray-body_right")
		}
		elemBody.fadeToggle(400);
	});

	/////////////////////////////////
	// add bg for menu on scroll
	/////////////////////////////////
	function scrollMenu() {
		var header = $( '.qdaf-header-fixed' );

		if ( ! header.length ) {
			return;
		}

		if ( $( window ).scrollTop() >= 50 ) {
			header.addClass( 'qdaf-header-fix-scroll' )
		} else {
			header.removeClass( 'qdaf-header-fix-scroll' )
		}
	}

	/////////////////////////////////
	// VIDEO BANNER
	/////////////////////////////////

	$(".f-feat-wrap, .f-video-wrap").each(function () {
		var videoWrap = $(this),
			videoPopUp = videoWrap.find(".video_popup"),
			buttonPlay = videoWrap.find(".play-btn"),
			videoIframe = videoPopUp.find("iframe"),
			iframeSrc = videoIframe.attr("src"),
			iframeDataSrc = videoIframe.attr("data-src");

		buttonPlay.on("click", function (e) {
			e.preventDefault();
			buttonPlay.fadeOut(1000);
			videoPopUp.addClass("active");
			videoIframe.attr("src", iframeDataSrc);
		});
	});


	/////////////////////////////////
	// Pop up
	////////////////////////////////
	var popUpForm = $(".popup-form");
	if (popUpForm.length) {
		popUpForm.magnificPopup({
			type: "inline",
			preloader: false,
			closeBtnInside: false,
			callbacks: {}
		});
	}

	$(".popup-white-form").on("click", function (event) {
		var that = $(this),
			popUpUrl = that.attr("href");
		$(popUpUrl).addClass("popUp")

	});

	$(".pop-up-hide, .f-close-pop-up").on("click", function (event) {
		$(".pop-up-hide").removeClass("popUp");

	});

	$(".f-pop-up-form").on("click", function (event) {
		event.stopPropagation();
	});


	/////////////////////////////////
	// Count
	////////////////////////////////
	var counters = function () {

		$('.f-counter__name').not('.animated').each(function () {
			if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 0.7) {
				$(this).addClass('animated').countTo();
			}
		});
	}
	/////////////////////////////////
	// progres skills
	////////////////////////////////
	var progresSkills = function () {
		$(".f-about-skills-item__progress-bar").each(function () {
			var that = $(this),
				progresWidth = that.attr("data-progress");
			if ($(window).scrollTop() >= $(".f-about-skills-items").offset().top - $(window).height() * 0.7) {
				$(this).width(progresWidth + "%")
			}
		});
	}


	/////////////////////////////////
	// Isotope
	////////////////////////////////

	function filtersIsotope() {
		if (!$('.f-isotope').length) return;

		$('.f-isotope').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});

		$('.filter-button-group').on('click', 'button', function () {
			var that = $(this);

			that.parent().find('.active').removeClass('active');

			that.addClass('active');

			that.parent().parent().parent().find('.f-isotope').isotope({
				filter: that.attr('data-filter')
			});
		});
	}

	/////////////////////////////////
	// Contact form efect
	////////////////////////////////

	$( document ).on( "focusin", ".wpcf7-form input:not([type='submit']), .wpcf7-form textarea, .wpcf7-form select", function () {
		$( this ).parent().parent().siblings( ".f-contact-form_placeholder" ).removeClass( "f-filled", 400 );
		$( this ).parent().parent().siblings( ".f-contact-form_placeholder" ).addClass( "f-filled", 400 );
	} );

	$( document ).on( "focusout", ".wpcf7-form input:not([type='submit']), .wpcf7-form textarea", function () {
		if ( $( this ).val().length === 0 ) {
			$( this ).parent().parent().siblings( ".f-contact-form_placeholder" ).removeClass( "f-filled", 400 );
		}
	} );

	$(document).on("focusout", ".form-control select", function () {
		if ($(this).children("option").prop("disabled" && "selected")) {
			$(this).parent().siblings(".f-contact-form_placeholder").removeClass("f-filled", 400);
		}
	});

	$(document).on("focusin", ".comment-form input:not([type='submit']), .comment-form textarea", function () {
		$(this).parent().removeClass("f-filled", 400);
		$(this).parent().addClass("f-filled", 400);
	});

	$(document).on("focusout", ".comment-form input:not([type='submit']), .comment-form textarea", function () {
		if ($(this).val().length === 0) {
			$(this).parent().removeClass("f-filled", 400);
		}
	});

	// $(document).on("focusout", ".form-control select", function() {
	//     if ($(this).children("option").prop("disabled" && "selected")) {
	//         $(this).parent().siblings(".f-contact-form_placeholder").removeClass("f-filled", 400);
	//     }
	// });


	/////////////////////////////////
	// Star Rating Plugin
	////////////////////////////////
	var starPlagin = $(".f-testimonial__rating");
	if (starPlagin.length) {

		starPlagin.raty({
			number: function () {
				return $(this).attr("data-number");
			},
			half: false,
			starOff: " ion-ios-star c-1",
			starOn: "ion-ios-star c-1"
		});
	}


	/////////////////////////////////
	// Menu
	////////////////////////////////
	var firstChildLink = $('.menu-item-has-children > a').append('<span class="ion-ios-arrow-down"></span>');

	$(".nav-menu-icon").on("click", function (e) {
		$(this).toggleClass("active");
		$(this).parent().toggleClass("active");
	});
	$(".js-nav-menu-icon-close").on("click", function (e) {
		$('.f-navigation ').removeClass("active");
	});

	firstChildLink.find("span").on("click", function (e) {
		$(this).closest("li").toggleClass("active");
	});

	$(".f-form .menu-item-has-children > a").on("click", function (event) {

		$(this).closest("li").toggleClass("active");
	});

	$(".menu_style13 .dropdown").on("click", function (e) {
		$(this).toggleClass("open");
	});

	$('.f-navigation:not(.menu_style13)').on('click', '.menu-item-has-children > a', function(event){
		event.preventDefault();
		$(this).next().slideToggle()
	})

	/////////////////////////////////
	// Swiper
	////////////////////////////////
	function swiper() {

		if ($(".js-swiper_style1.swiper-container").length) {

			var swiper = new Swiper(".js-swiper_style1.swiper-container", {
				pagination: ".swiper-pagination",
				paginationClickable: true,
				loop: true,
				speed: 2000,
				// longSwipesMs: 5000,
				autoplayDisableOnInteraction: false,
				autoplay: 5000,
				nextButton: ".swiper-button-next",
				prevButton: ".swiper-button-prev"
			});
		}

		if ($(".js-swiper_style2.swiper-container").length) {

			var swiper = new Swiper(".js-swiper_style2.swiper-container", {
				paginationClickable: true,
				nextButton: ".swiper-button-next",
				prevButton: ".swiper-button-prev",
				loop: true,
				speed: 2000
			});
		}
		if ($(".js-swiper_style3.swiper-container").length) {
			var swiper = new Swiper(".js-swiper_style3.swiper-container", {
				pagination: ".swiper-pagination",
				slidesPerView: 2,
				paginationClickable: true,
				loop: true,
				speed: 2000,
				autoplay: 3000,
				spaceBetween: 30,
				freeMode: true,
				// Responsive breakpoints
				breakpoints: {
					// when window width is <= 320px
					768: {
						slidesPerView: 1
					},
					// when window width is <= 640px
					1200: {
						slidesPerView: 2
					}
				}
			});
		}
		if ($(".js-swiper_style4.swiper-container").length) {
			var swiper = new Swiper(".js-swiper_style4.swiper-container", {
				nextButton: ".swiper-button-next",
				prevButton: ".swiper-button-prev",
				slidesPerView: 2,
				loop: true,
				speed: 3000,
				autoplay: 4000,
				spaceBetween: 0,
				freeMode: true,
				// Responsive breakpoints
				breakpoints: {
					// when window width is <= 320px
					768: {
						slidesPerView: 1
					},
					// when window width is <= 640px
					1200: {
						slidesPerView: 2
					}
				}
			});
		}

		if ($(".js-swiper_style5.swiper-container").length) {
			var swiper = new Swiper(".js-swiper_style5.swiper-container", {
				pagination: ".swiper-pagination",
				slidesPerView: "auto",
				centeredSlides: true,
				loop: true,
				speed: 2000,
				autoplay: 300,
				paginationClickable: true
			});
		}


		// full page sliders
		if ($(".swiper-container-h").length) {
			var swiperH = new Swiper(".swiper-container-h", {
				pagination: ".swiper-pagination-h",
				paginationClickable: true,
				speed: 2000,
				spaceBetween: 50
			});
		}
		if ($(".swiper-container-v").length) {

			var swiperV = new Swiper(".swiper-container-v", {
				pagination: ".swiper-pagination-v",
				paginationClickable: true,
				direction: "vertical",
				slidesPerView: 1,
				speed: 2000,
				spaceBetween: 50,
				paginationBulletRender: function (swiper, index, className) {
					return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
				}
			});
		}
	}

	swiper();

	///////////////////////////////
	// WOWSLIDERS
	////////////////////////////////

	if (jQuery(".wowslider-container1").length) {
		jQuery(".wowslider-container1").wowSlider({
			effect: "carousel",
			prev: "",
			next: "",
			duration: 20 * 100,
			delay: 20 * 100,
			width: 1170,
			height: 550,
			// autoPlay: true,
			// autoPlayVideo: false,
			// playPause: true,
			stopOnHover: false,
			// loop: false,
			bullets: 1,
			caption: true,
			captionEffect: "parallax",
			controls: true,
			// controlsThumb: false,
			responsive: 1,
			fullScreen: false,
			// gestures: 2,
			// onBeforeStep: 0,
			images: 0
		});
	}

	// ///////////////////////////
	// BACKGROUND IMAGE
	////////////////////////////////

	function wpc_add_img_bg(img_sel, parent_sel, img_height) {
		if (!img_sel) {
			console.info('no img selector');
			return false;
		}
		var $parent, _this;
		$(img_sel).each(function () {
			_this = $(this);
			$parent = _this.closest(parent_sel);
			$parent = $parent.length ? $parent : _this.parent();
			if (img_height) {
				$parent.css('background-image', 'url(' + this.src + ')');
				_this.css('visibility', 'hidden');
			} else {
				$parent.css('background-image', 'url(' + this.src + ')');
				_this.hide();
			}
		});
	}

	wpc_add_img_bg('.js-bg-img > img', '.js-bg-img');
	wpc_add_img_bg('.js-bg-img_with-height > img', '.js-bg-img_with-height', true);


	function goTop()
	{
		var toTop = $( '.qda-to-top' );

		if ( ! toTop ) return;

		if ( $( window ).scrollTop() > 100 ) {
			toTop.addClass( 'qda-to-top--view' );
		} else {
			toTop.removeClass( 'qda-to-top--view' );
		}
	}

	$( document ).on( 'click', '.qda-to-top', function() {

		$( this ).removeClass( 'qda-to-top--view' );

		$( 'html, body' ).animate({
			scrollTop: 0
		}, 800 );
	});

	$( document ).on( 'click', '.qda-fullpage-item', function() {
		var index = $( this ).attr( 'data-index' ) - 1;

		$( '.qda-fullpage-item' ).removeClass( 'qda-fullpage-active' );
		$( this ).addClass( 'qda-fullpage-active' );

		var rowFixed = $( '.qdaf-header-fixed' ),
			fixed = rowFixed.height() ? rowFixed.height() : 0;

		$( 'html, body' ).animate({
			scrollTop: $( '.vc_row:not( .qdaf-header-fixed .vc_row ):not( .vc_inner ):eq(' + index + ')' ).offset().top - fixed
		}, 800 );
	});

	if ( QDAFR.hasOwnProperty( 'fullpage' ) && QDAFR.fullpage == '1' ) {

		window.onbeforeunload = function () {

			$( 'body' ).css( 'display', 'none' );

			window.scrollTo(0, 0);
		};

		$( 'html' ).addClass( 'qda-fullpage-on' );

		var links = '';

		for ( var i = 1; i <= $( '.vc_row:not( .qdaf-header-fixed .vc_row ):not( .vc_inner )' ).length; i ++ ) {

			links += '<button class="qda-fullpage-item" data-index="' + i + '">0' + i + '</button>';
		}

		$( 'body' ).append( '<div class="qda-fullpage-pagination">' + links + '</div>' );
		$( '.qda-fullpage-pagination .qda-fullpage-item:first-child' ).trigger( 'click' );
	}

	function fullPage() {

		if (  ! QDAFR.hasOwnProperty( 'fullpage' ) || QDAFR.fullpage != '1' ) {
			return;
		}

		if ( $( document ).width() < 800 ) {
			$( 'html' ).removeClass( 'qda-fullpage-on' );
			$( '.qda-fullpage-pagination, .qda-fullpage-title' ).hide();
		} else {
			$( 'html' ).addClass( 'qda-fullpage-on' );
			$( '.qda-fullpage-pagination, .qda-fullpage-title' ).show();
		}
	}
	fullPage();
	/////////////////////////////////
	// scroll
	////////////////////////////////
	$( window ).on( 'scroll', function () {
		counters();
		progresSkills();
		scrollMenu();
		goTop();
	});
	/////////////////////////////////
	// load
	////////////////////////////////
	$(window).on('load', function () {
		swiper();
		counters();
		filtersIsotope();
	});
	/////////////////////////////////
	// Resize
	////////////////////////////////
	$(window).on('resize', function () {
		fullPage();
		filtersIsotope();
		swiper();
	});

	function map(){
		$('.qda-map').each(function(idx, mapNode){
			 if( typeof google == 'undefined' ) {
				return;
			}

			var styles = {};
			var stylesNode = $( mapNode ).find( '.qda-map__styles');
			var content = $(this).find('.qda-map__content').html();

			if( stylesNode.length > 0 ) {
				try {
					styles = $.parseJSON( stylesNode.text() );
				} catch( ex ) {
					console.error( 'Unable to parse map style' );
				}
			}

			var coordonates = {
				lat: parseFloat(mapNode.getAttribute('data-lat')),
				lng: parseFloat(mapNode.getAttribute('data-long'))
			};

			if( ! coordonates.lat && ! coordonates.lng ) {
				return;
			}

			var map = new google.maps.Map(mapNode, {
				center: coordonates,
				disableDefaultUI: true,
				scrollwheel: false,
				styles: styles,
				zoom: parseInt(mapNode.getAttribute('data-zoom'), 10),
				zoomControl: Boolean(mapNode.getAttribute('data-zoombuttons')),
				zoomControlOptions: {
					position: google.maps.ControlPosition.RIGHT_CENTER
				},
				mapTypeId: google.maps.MapTypeId[mapNode.getAttribute('data-layout')]
			});

			google.maps.event.addDomListener(window, 'esize', function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, 'resize');
				map.setCenter(center);
			});

			var marker = new google.maps.Marker({
				position: coordonates,
				map: map
			});

			if(content && content.trim().length > 0 ){
				var infowindow = new google.maps.InfoWindow({
					content: content
				});

				marker.addListener('click', function(){
					infowindow.open(map, marker);
				});

				if( parseInt( mapNode.getAttribute('data-info-on'), 10 ) ) {
					infowindow.open(map, marker);
				}
			}
		})
	}
	/////////////////////////////////
	// Ready
	////////////////////////////////
	$(document).ready(function () {
		scrollMenu();
		counters();
		map();
	});

	$('.f-preload-wrap').hide(400);

})(jQuery, window, document);