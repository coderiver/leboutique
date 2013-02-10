$(document).ready(function() {

//window width
function window_width() {	
	var wnd_width = $(window).width();
	$('.user-link b').text(wnd_width);
	if (wnd_width >= 980 && wnd_width <= 1220) {
		$('.action_big').css('width', '100%');
		$('.action_small, .action_smallest').css('width', '50%');
		$('.action_adv').css('width', '50%');
	};
	if (wnd_width > 1220 && wnd_width <= 1600) {
		$('.action_big').css('width', '66.6666%');
		$('.action_adv').css('width', '33.3333%');
		$('.action_small, .action_smallest').css('width', '33.3333%');
	};
	if (wnd_width > 1600) {
		$('.action_big').css('width', '50%');
		$('.action_small, .action_smallest').css('width', '25%');
	};
};

//init functions
window_width();
//window resize
$(window).resize(function () {
	window_width();
});

//profile
$('.user__mail').click(function() {
	if ($(this).parent().hasClass('active')) {
		$(this).parent().removeClass('active');
		$(this).next().hide();
	}
	else {
		$(this).parent().addClass('active');
		$(this).next().show();
	};
});

});