<<<<<<< HEAD
$(function () {

	var specialsAPI = 'https://obscure-tundra-54269.herokuapp.com/bar-food'
	$.getJSON(specialsAPI, function(data) {
		console.log('I have recieved the specials, sir!')
		console.log(data.appetizers)
	})


    $(".hero img:gt(0)").hide()
    setInterval(function(){
      $(".hero :first-child").fadeOut()
      .next("img").fadeIn()
      .end().appendTo(".hero")
    }, 3000)

	
	$('.tab-panels .tabs li').on('click', function() {

		 var $panel = $(this).closest('.tab-panels')

        $panel.find('.tabs li.active').removeClass('active')
        $(this).addClass('active')

        var panelToShow = $(this).attr('rel')

        $panel.find('.panel.active').slideUp(650, showNextPanel)

        function showNextPanel() {
            $(this).removeClass('active')

            $('#'+panelToShow).slideDown(650, function() {
                $(this).addClass('active')
            })
        }

	})	

    var menuJSON = 'https://obscure-tundra-54269.herokuapp.com/casual-dining'
    $.getJSON (menuJSON, function(data) {
        console.log(data.entrees)
    })
})

