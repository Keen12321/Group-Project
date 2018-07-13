<<<<<<< HEAD
$(document).ready(function() {
	
	$("#tabs li").on('click', function() {
		
		$("#tabs li .nav").removeClass('show')
		$(this).find('.nav').addClass('show')
	})



=======
$(function () {
	$("#calendar").datepicker()formatDate( "DD, MM d, yy", new Date( 2007, 7 - 1, 14 ), {
  dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
  dayNames: $.datepicker.regional[ "fr" ].dayNames,
  monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
  monthNames: $.datepicker.regional[ "fr" ].monthNames
});
>>>>>>> c32a30371d8a22413d78cc0100a99ec8455775f2
})