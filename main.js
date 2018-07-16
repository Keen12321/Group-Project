/**
 * General jQuery API calls and Hero Carousel
 * 
 * Collaberators: @Keen12321, @scabbalicious, @victorinspace
 */

$(document).ready(function() {

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
				console.log('Something is wrong')
		}
	})

	// Menu API
	var menuJSON = 'https://obscure-tundra-54269.herokuapp.com/casual-dining'

	$.getJSON (menuJSON, function(menu) {
		$('#menuname1').text(menu.appetizers[0].name)
		$('#menuprice1').text(menu.appetizers[0].price) 
		$('#menudescription1').text(menu.appetizers[0].description)

		$('#allergy').mouseover(function() {
			$(this).find('.allergy-popup').fadeIn('slow')
		})
		$('#allergy').mouseout(function() {
			$(this).find('.allergy-popup').fadeOut('slow')
		})

		// extra food information icons
		var allergy = menu.appetizers[0].extra.glutenfree
		if (allergy === true) {
			$('#allergy').css('color', 'green')
		}
		var spicy = menu.appetizers[0].extra.spicy
		if (spicy === true) {
			$('#spicy').css('color', 'green')
		}
		var vegetarian = menu.appetizers[0].extra.vegetarian
		if (vegetarian === true) {
			$('#vegan').css('color', 'green')
		}


		$('#menuname2').text(menu.appetizers[1].name)
		$('#menuprice2').text(menu.appetizers[1].price)
		$('#menudescription2').text(menu.appetizers[1].description)

		$('#menuname3').text(menu.appetizers[2].name)
		$('#menuprice3').text(menu.appetizers[2].price) 
		$('#menudescription3').text(menu.appetizers[2].description)

		$('#menuname4').text(menu.appetizers[3].name)
		$('#menuprice4').text(menu.appetizers[3].price)
		$('#menudescription4').text(menu.appetizers[3].description)

		$('#entreename1').text(menu.entrees[0].name)
		$('#entreeprice1').text(menu.entrees[0].price)
		$('#entreedescription1').text(menu.entrees[0].description)

		$('#entreename2').text(menu.entrees[1].name)
		$('#entreeprice2').text(menu.entrees[1].price)
		$('#entreedescription2').text(menu.entrees[1].description)

		$('#entreename3').text(menu.entrees[2].name)
		$('#entreeprice3').text(menu.entrees[2].price)
		$('#entreedescription3').text(menu.entrees[2].description)

		$('#entreename3').text(menu.entrees[3].name)
		$('#entreeprice3').text(menu.entrees[3].price)
		$('#entreedescription3').text(menu.entrees[3].description)

		$('#dessertname1').text(menu.desserts[0].name)
		$('#dessertprice1').text(menu.desserts[0].price)
		$('#dessertdescription1').text(menu.desserts[0].description)

		$('#dessertname2').text(menu.desserts[1].name)
		$('#dessertprice2').text(menu.desserts[1].price)
		$('#dessertdescription2').text(menu.desserts[1].description)

		$('#dessertname3').text(menu.desserts[2].name)
		$('#dessertprice3').text(menu.desserts[2].price)
		$('#dessertdescription3').text(menu.desserts[2].description)
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

	// Connecting Tabs to Side Nav
	$("#nav1").on('click', function(){
		$('#panel2').removeClass('active').css("display", "none")
		$('#panel3').removeClass('active').css("display", "none")
		$("#panel1").addClass('active').css("display", "inline-block")
		$(".tabs li.active").removeClass("active")
		$(".tabs li:first-child").addClass("active")
	})

	$("#nav2").on('click', function(){
		$('#panel1').removeClass('active').css("display", "none")
		$('#panel3').removeClass('active').css("display", "none")
		$("#panel2").addClass('active').css("display", "inline-block")
		$(".tabs li.active").removeClass("active")
		$(".tabs li:nth-child(2)").addClass("active")
	})

	$("#nav3").on('click', function(){
		$('#panel1').removeClass('active').css("display", "none")
		$('#panel2').removeClass('active').css("display", "none")
		$("#panel3").addClass('active').css("display", "inline-block")
		$(".tabs li.active").removeClass("active")
		$(".tabs li:nth-child(3)").addClass("active")
	})

	menu.appetizers.forEach(function(data) {
		description.append(data.description)
	})
})
