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
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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

	// google conatct map
	var iframe = document.getElementById("bbContactMap");

	// Check if the iframe has loaded
	iframe.onload = function () {
		// Access the iframe's document and remove the link
		var iframeDocument = iframe.contentWindow.document;
		var largerMapLink = iframeDocument.querySelector(".place-card-large");
		if (largerMapLink) {
			largerMapLink.style.display = "none"; // Hide the link
		}
	};
});
