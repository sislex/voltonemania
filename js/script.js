(function($) {
	
	'use strict';
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var mainHeader = $('.main-header').height();
			var windowpos = $(window).scrollTop();
			if (windowpos >= mainHeader) {
				$('.sticky-header').addClass('now-visible');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.sticky-header').removeClass('now-visible');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	//Search Box Toggle
	if($('.main-header .seach-toggle').length){
		//Dropdown Button
		$('.main-header .seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
	
	
	//Revolution Slider
	if($('.main-slider .tp-banner').length){

		$('.main-slider .tp-banner').show().revolution({
			dottedOverlay:'yes',
			delay:10000,
			startwidth:1200,
			startheight:750,
			hideThumbs:600,
			
			thumbWidth:80,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:'bullet',
			navigationArrows:'0',
			navigationStyle:'preview3',
			
			touchenabled:'on',
			onHoverStop:'off',
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			
			parallax:'mouse',
			parallaxBgFreeze:'on',
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
			
			keyboardNavigation:'off',
			
			navigationHAlign:'center',
			navigationVAlign:'bottom',
			navigationHOffset:0,
			navigationVOffset:20,
			
			soloArrowLeftHalign:'left',
			soloArrowLeftValign:'center',
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			
			soloArrowRightHalign:'right',
			soloArrowRightValign:'center',
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			
			shadow:0,
			fullWidth:'on',
			fullScreen:'off',
			
			spinner:'spinner4',
			
			stopLoop:'off',
			stopAfterLoops:-1,
			stopAtSlide:-1,
			
			shuffle:'off',
			
			autoHeight:'off',
			forceFullWidth:'on',
			
			hideThumbsOnMobile:'on',
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:'on',
			hideArrowsOnMobile:'on',
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:'',
			fullScreenOffsetContainer: ''
	  });
		
	}
	
	
	//Fluid Width Four Column Slider
	if ($('.full-slider-section .column-carousel').length) {
		$('.full-slider-section .column-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	
	//Testimonials Carousel Slider
	if ($('.testimonials-carousel').length) {
		$('.testimonials-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 6000,
			smartSpeed: 700,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	//Progress Bar
	if($('.progress-levels .progress-box .bar-fill').length){
		$('.progress-box .bar-fill').each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth+'%');
		});
	}
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$('.accordion-box').on('click', '.acc-btn', function() {
			
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
			$('.accordion .acc-btn').removeClass('active');
			
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				//$(this).removeClass('active');
				return false;
				//$(this).next('.accord-content').slideUp(300);
			}else{
				$(this).addClass('active');
				$('.accordion').removeClass('active-block');
				$('.accordion .acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	//Image Slider
	if ($('.image-slider').length) {
		$('.image-slider').owlCarousel({
			loop:true,
			  nav : true,
			  smartSpeed : 1000,
			  autoplay: 7000,
			  responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$('.scroll-to-target').on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

	

})(window.jQuery);