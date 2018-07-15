/**
 * General jQuery API calls and Hero Carousel
 * 
 * Collaberators: @Keen12321, @scabbalicious, @victorinspace
 */

$(function () {

// Daily Special API
	var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

	$.getJSON(specialsJSON, function(specials) {

		// $('#info-cards__food-photo').text(data.appetizers[0].image) // TO DO: add photos to be pulled depending on date @victorinspce

		$('#info-cards__food-item').text(specials.appetizers[0].name)

		$('#info-cards__food-description').text(specials.appetizers[0].description)

	})

	// Menu API
  var menuJSON = 'https://obscure-tundra-54269.herokuapp.com/casual-dining'
	
	$.getJSON (menuJSON, function(menu) {

		$('#menuname').text(menu.name)

		$('#menuprice').text(menu.price)

		$('#menudescription').text(menu.description)
	})

// Hero Image Carousel
    $(".hero img:gt(0)").hide()
    setInterval(function(){
      $(".hero :first-child").fadeOut()
      .next("img").fadeIn()
      .end().appendTo(".hero")
    }, 5000)

// Tabs Menu Section
	$('.tab-panels .tabs li').on('click', function() {

		 var $panel = $(this).closest('.tab-panels')

        $panel.find('.tabs li.active').removeClass('active')
        $(this).addClass('active')

        var panelToShow = $(this).attr('rel')


        function showNextPanel() {
            $(this).removeClass('active')

            $('#'+panelToShow).slideDown(function() {
                $(this).addClass('active')
            })
        }
        $panel.find('.panel.active').slideUp(showNextPanel)

	})


})




// TO DO: Have Menu Items Display without repeating code.
// EXTRA -- Have search bar for food items