$(document).ready(function() {
	
	$("#tabs li").on('click', function() {
		
		$("#tabs li .nav").removeClass('show')
		$(this).find('.nav').addClass('show')
	})



})