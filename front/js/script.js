$(document).ready(function(){
	$(".menu_toggle").click(function(){
		$(".sidemenu").toggleClass("sidemenu_vis");
		$(".head-sidemenu").toggleClass("head-sidemenu-vis");
		$(".wrapper").toggleClass("w_for_menu");
		$("header").toggleClass("header_f_m");
		$(".ul_menu").toggleClass("ul_menu_m")
		$("body").toggleClass("body_menu");
	})
	$(".wrapper").click(function(){
		$(".sidemenu").removeClass("sidemenu_vis");
		$(".cart").removeClass("cart_vis");
		$(".wrapper").removeClass("w_for_menu , w_for_cart");
		$("header").removeClass("w_for_menu , header_f_c");
		$("header").removeClass("header_f_m");
	})
	$(".cart_icon").click(function(){
		$(".cart").toggleClass("cart_vis");
		$(".wrapper").toggleClass("w_for_cart");
		$("header").toggleClass("header_f_c");
		$(".ul_menu").toggleClass("ul_menu_m")
		$("body").toggleClass("body_menu");
	})
})