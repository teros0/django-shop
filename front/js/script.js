$(window).on('load', function () {
	$(".wrapper_body").fadeOut(0);
    $('.loaded').delay(100).fadeOut(1000);
    $(".wrapper_body").delay(500).fadeIn(1000);
});
$(document).ready(function(){
	$(".menu_toggle").click(function(){
		$(".sidemenu").toggleClass("sidemenu_vis");
		$(".wrapper_body").toggleClass("wrapper_body_m");
		$("body").css(
			"overflow","hidden"
			);
		$(".menu").animate({
			left:"0px"
		},1500);
		$('.head-sidemenu').animate({
			top:"0px"
		},1500);
		$('header').css(
			"zIndex", -100);

		$(".product-item").css(
			"zIndex",-1000
		);
	})
	$(".wrapper").click(function(){
		$(".sidemenu").removeClass("sidemenu_vis");
		$(".cart").removeClass("cart_vis");
		$(".wrapper_body").removeClass("wrapper_body_c , wrapper_body_m");
		$(".menu").animate({
			left:"-300px"
		},0);
		$('.head-sidemenu').animate({
			top:"-50px"
		},0);
		$('header').css(
			"zIndex", 120);
		$(".product-item").css(
			"zIndex",0
		);
		$("body").css(
			"overflow","auto"
			);
	})
	$(".cart_icon").click(function(){
		$(".cart").toggleClass("cart_vis");
		$(".wrapper_body").toggleClass("wrapper_body_c");
		$(".ul_menu").toggleClass("ul_menu_m")
		$("body").css(
			"overflow","hidden"
			);
		$('header').css(
			"zIndex", -100);

		$(".product-item").css(
			"zIndex",-1000
		);
	})
})