jQuery(document).ready(function($){
	var responsiveMenu = 
	{
		init:function()
		{
			$('#site-navigation').append('<ul id="menuToggleUl"><li><a href="#" id="menuToggle">Menu</a></li></ul>');
			responsiveMenu.slideUp();
		},
		slideUp:function(){
			if ($(window).width() < 768 ) {
				$('#menu-top').slideUp();
				responsiveMenu.toggleListener();
			}
		},
		toggleListener:function(){
			if($("#menuToggle")){
				$("#menuToggle").bind('click', responsiveMenu.menuToggle );
			}	
		},
		menuToggle:function()
		{	
			event.preventDefault();
			$('#menu-top').slideToggle();
		}
	}
	responsiveMenu.init();
	// $(window).resize(function()
	// 	{
	// 		responsiveMenu.slideUp();
	// 	});
	// console.log("responsiveMenu working")

});



