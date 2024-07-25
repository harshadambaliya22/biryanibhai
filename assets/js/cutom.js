$(document).ready(function () {
	$(".bb-testimonial-silder").slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false,
					centerMode: true,
					centerPadding: "170px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false,
				},
			},
		],
	});

	$(".bb-gallery-slider").slick({
		centerMode: true,
		variableWidth: true,
		centerPadding: "60px",
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	});

	// mobile menu
	$(".navbar-toggler").on("click", function () {
		$(".bb-site").addClass("disable-scroll");
	});
	$(".bb-navbar-close").on("click", function () {
		$(".navbar-collapse").collapse("hide");
		$(".bb-site").removeClass("disable-scroll");
	});

	// header sticky
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 32) {
			$(".bb-header-center").addClass("bb-header-fixed");
		} else {
			$(".bb-header-center").removeClass("bb-header-fixed");
		}
	});

	// conatct form
	$(".bb-contact-btn").on("click", function () {
		$(".bb-contact-form").addClass("show");
		$(".bb-contact-content").addClass("form-show");
	});
	$(".bb-form-cancel-btn").on("click", function () {
		$(".bb-contact-form").removeClass("show");
		$(".bb-contact-content").removeClass("form-show");
	});
	// blog section
	$(".bb-blog-continue-btn").on("click", function () {
		$(".bb-blog-details-wrapper").addClass("show");
		$(".bb-blog-tab-list-wrapper").addClass("hide");
	});
	$(".bb-back-btn").on("click", function () {
		$(".bb-blog-details-wrapper").removeClass("show");
		$(".bb-blog-tab-list-wrapper").removeClass("hide");
	});

	//chatbox
	$(".bb-chat-btn").on("click", function () {
		$(".bb-chat-box").addClass("open");
		$(".bb-site").addClass("chatbox-show");
	});
	$(".bb-chat-close-btn").on("click", function () {
		$(".bb-chat-box").removeClass("open");
		$(".bb-site").removeClass("chatbox-show");
	});
	$(".bb-chat-mobile-close-btn").on("click", function () {
		$(".bb-chat-box").removeClass("open");
		$(".bb-site").removeClass("chatbox-show");
	});
});
