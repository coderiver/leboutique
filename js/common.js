$(document).ready(function() {

//profile
$('.user__mail button').click(function() {
	if ($(this).parent().parent().hasClass('active')) {
		$(this).parent().parent().removeClass('active');
		$(this).parent().next().hide();
	}
	else {
		$(this).parent().parent().addClass('active');
		$(this).parent().next().show();
	}
});

});