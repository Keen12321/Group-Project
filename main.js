/**
 * General jQuery API calls and Hero Carousel
 * 
 * Collaberators: @Keen12321, @scabbalicious, @victorinspace
 */

$(function () {

// Daily Special API
	var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

	$.getJSON(specialsJSON, function(specials) {

		var d = new Date()	

		switch (d.getDay()) {
			case (0):
				$('#info-cards__food-item--name').text(specials.appetizers[0].name)
				$('#info-cards__food-item--price').text('$' + specials.appetizers[0].price)
				$('#info-cards__food-item--description').text(specials.appetizers[0].description)
				break
			case (1):
				$('#info-cards__food-item--nameitem').text(specials.appetizers[1].name)
				$('#info-cards__food-item--price').text('$' + specials.appetizers[1].price)
				$('#info-cards__food-item--description').text(specials.appetizers[1].description)
				break
			case (2):
				$('#info-cards__food-item--name').text(specials.appetizers[2].name)
				$('#info-cards__food-item--price').text('$' + specials.appetizers[2].price)
				$('#info-cards__food-item--description').text(specials.appetizers[2].description)
				break
			case (3):
				$('#info-cards__food-item--name').text(specials.appetizers[3].name)
				$('#info-cards__food-item--price').text('$' + specials.appetizers[3].price)
				$('#info-cards__food-item--description').text(specials.appetizers[3].description)
				break
			case (4):
				$('#info-cards__food-item--name').text(specials.entrees[0].name)
				$('#info-cards__food-item--price').text('$' + specials.entrees[0].price)
				$('#info-cards__food-item--description').text(specials.entrees[0].description)
				break
			case (5):
				$('#info-cards__food-item--name').text(specials.entrees[1].name)
				$('#info-cards__food-item--price').text('$' + specials.entrees[1].price)
				$('#info-cards__food-item--description').text(specials.entrees[1].description)
				break
			case (6):
				$('#info-cards__food-item--name').text(specials.entrees[2].name)
				$('#info-cards__food-item--price').text('$' + specials.entrees[2].price)
				$('#info-cards__food-item--description').text(specials.entrees[2].description)
				break
			default:
				console.log('Something has went wrong')
		}

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
// $(function(){
// 	$('#swapiform').on('submit', function(e) {
// 		e.preventDefault()

// 		var search = $('#swapisearch').val()

// 		if (search.length > 0) {
// 			$.get('https://swapi.co/api/people/?search=' + search, function(data) {
// 				var html = data.results.map(person => {
// 					name: ${[person.name}
// 					birth.year: ${person.birth_year}
// 					gender: ${person.gender}
// 					url: ${person.url}
// 				})
				
// 			})
// 		}
// 	})
// })