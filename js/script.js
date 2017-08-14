jQuery(document).ready(function($) {
	resize_main();
});
function resize_main() {
	var windowHeigth = $(window).height(),
		urProfileHeihgt = $('.usr-profile').height(),
		cardHeigth = windowHeigth-130,
		scrlContHeight = cardHeigth - urProfileHeihgt-135;

	$('.card-body').height(cardHeigth);
	$('.scroll-container').height(scrlContHeight);
}