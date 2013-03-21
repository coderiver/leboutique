$(document).ready(function() {

//window width
function window_width() {	
	var wnd_width = $(window).width();
	//$('.user-link b').html(wnd_width);
	if (wnd_width >= 980 && wnd_width <= 1220) {
		$('.action_big').css('width', '100%');
		$('.action_small, .action_smallest').css('width', '50%');
		$('.ie7 .action_small, .action_smallest').css('width', '50%');
		$('.action_adv').css('width', '50%');
		$('.about__list li').css('width', '33.3%');	
		$('.about__list p').css('height', '36px');
		$('.soon__list li').css('width', '25%');
		$('.action_adv').show();
	};
	if (wnd_width > 1220 && wnd_width <= 1600) {
		$('.action_big').css('width', '66.6%');
		$('.action_adv').css('width', '33.3%');
		$('.action_small, .action_smallest').css('width', '33.3%');
		$('.about__list li').css('width', '33.3%');	
		$('.about__list p').css('height', '36px');
		$('.soon__list li').css('width', '20%');
		$('.action_adv').show();
	};
	if (wnd_width > 1600) {
		$('.action_big').css('width', '50%');
		$('.action_small, .action_smallest').css('width', '25%');
		$('.about__list li').css('width', '16.6%');	
		$('.about__list p').css('height', '45px');	
		$('.soon__list li').css('width', '16.6%');
		$('.action_adv').hide();
	};
	//for ie
	if (wnd_width < 1024) {
		$('.container').css('width', '980px');
	}
	else {
		$('.container').css('width', 'auto');
	}
};

//clothes
function block_down() {
	var block_el = $(".clothes");
	var block_height = block_el.height();
	var block_parent = $(".container_mod");
	block_parent.css('padding-bottom', block_height);
}


//init functions
window_width();
block_down();
//window resize
$(window).resize(function () {
	window_width();
	block_down();
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