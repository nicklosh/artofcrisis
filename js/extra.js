jQuery(document).ready(function($){
	var responsiveMenu = 
	{
		init:function()
		{
			if ($(window).width() < 768 ) {
				$('#site-navigation').append('<ul><li><a href="#" id="menuToggle">Menu</a></li></ul>');
				$('#menu-top').slideUp();
				responsiveMenu.toggleListener();
			}
			// else {
			// 	var removeUl = $("#menuToggle").closest('ul');
			// 	$(removeUl).remove();
			// }
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
	// 		responsiveMenu.init();
	// 	});
	// console.log("responsiveMenu working")

});



