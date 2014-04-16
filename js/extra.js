jQuery(document).ready(function($){
	var responsiveMenu = 
	{
		toggleListener:function(){
			if($("#menuToggle")){
				$("#menuToggle").bind('click', responsiveMenu.menuToggle );
			}	
		},
		menuToggle:function(event)
		{	
			event.preventDefault();
			$('#menu-top').slideToggle();
		}
	}
	responsiveMenu.toggleListener();
});



