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

	$('.bb-navbar-close').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 32) {
			$(".bb-header-center").addClass("bb-header-fixed");
		} else {
			$(".bb-header-center").removeClass("bb-header-fixed");
		}
	});
});
