$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".header .header-bottom-navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	
	$('.header .header-bottom-navigation > ul').append('<li><a href="#popupBooking" data-toggle="modal" class="btn-style btn-blue">Đặt hẹn khám ngay</a></li>');
	$('.header .header-bottom-navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
	
	// Menu
	function callMenu() {
		if ($('body').hasClass('show_navigation')) {
			$('body').removeClass('show_navigation');
		} else {
			$('body').addClass('show_navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
	$(window).scroll(function () {
		let top = $(document).scrollTop();
		if (top > 0) {
			$('.header').addClass('header-sticky animated fadeInDown');
		} else {
			$('.header').removeClass('header-sticky animated fadeInDown');
		}
	});
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#return-to-top').fadeIn();
		} else {
			$('#return-to-top').fadeOut();
		}
	});
	
	$(document).on('click', '#return-to-top', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	
	if ($('.banner-area').length > 0) {
		$('.banner-area .owl-carousel').owlCarousel({
			animateOut: 'slideOutDown',
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 10000,
			autoplayHoverPause: false,
			dots: false,
			nav: true,
			onInitialized: startProgressBar,
			onTranslate: resetProgressBar,
			onTranslated: startProgressBar,
			navText: ["<span><i class='fal fa-angle-left'></i></span>", "<span><i class='fal fa-angle-right'></i></span>"]
		});
		
		function startProgressBar() {
			// apply keyframe animation
			$(".banner-process").css({
				width: "100%",
				transition: "width 10000ms"
			});
		}
		
		function resetProgressBar() {
			$(".banner-process").css({
				width: 0,
				transition: "width 0s"
			});
		}
	}
	
	if ($('#slide-Doctor').length > 0) {
		let owl = $('#slide-Doctor')
		owl.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 15000,
			autoplayHoverPause: false,
			dots: false,
			nav: false,
		});
		
		owl.on('changed.owl.carousel', function (event) {
			let link = $(this).find('.owl-item.active .slide-item').data('link');
			$("#changeLink").prop('href', link);
		});
	};
	
	if($("#slide-related-blog").length > 0) {
		let relatedBlog = new Swiper('#slide-related-blog', {
			loop: true,
			slidesPerView: 3,
			autoplay: {
				delay: 7500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}
		});
		
	}
});
