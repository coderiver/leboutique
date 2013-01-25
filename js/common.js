$(document).ready(function() {

//window width
function window_width() {	
	var wnd_width = $(window).width();
	if (wnd_width < 1280) {
		$('.action_big').css('width', '100%');
		$('.action_small:first').css('width', '33.3333%');
		$('.action_small:first').next().css('width', '33.3333%');
	}
	else {
		$('.action_big').css('width', '50%');
		$('.action_small:first').css('width', '25%');
		$('.action_small:first').next().css('width', '25%');
	}	
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