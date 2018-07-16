$(document).ready(function() {

    $(".hero img:gt(0)").hide()
    setInterval(function(){
      $(".hero :first-child").fadeOut()
      .next("img").fadeIn()
      .end().appendTo(".hero")
    }, 3000)

        var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

    $.getJSON(specialsJSON, function(specials) {

        // $('#info-cards__food-photo').text(data.appetizers[0].image) // TO DO: add photos to be pulled depending on date @victorinspce

        $('#info-cards__food-item').text(specials.appetizers[0].name)

        $('#info-cards__food-description').text(specials.appetizers[0].description)

    })

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

    var menuJSON = 'https://obscure-tundra-54269.herokuapp.com/casual-dining'
    $.getJSON (menuJSON, function(menu) {
        $('#menuname1').text(menu.appetizers[0].name)
        $('#menuprice1').text(menu.appetizers[0].price) 
        $('#menudescription1').text(menu.appetizers[0].description)

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

        		var allergy2 = menu.appetizers[1].extra.glutenfree
				if (allergy2 === true) {
					$('#allergy2').css('color', 'green')
				}
				var spicy2 = menu.appetizers[1].extra.spicy
				if (spicy2 === true) {
					$('#spicy2').css('color', 'green')
				}
				var vegetarian2 = menu.appetizers[1].extra.vegetarian
				if (vegetarian2 === true) {
					$('#vegan2').css('color', 'green')
				}

        $('#menuname3').text(menu.appetizers[2].name)
        $('#menuprice3').text(menu.appetizers[2].price) 
        $('#menudescription3').text(menu.appetizers[2].description)

        		var allergy3 = menu.appetizers[2].extra.glutenfree
				if (allergy3 === true) {
					$('#allergy').css('color', 'green')
				}
				var spicy3 = menu.appetizers[2].extra.spicy
				if (spicy3 === true) {
					$('#spicy').css('color', 'green')
				}
				var vegetarian3 = menu.appetizers[2].extra.vegetarian
				if (vegetarian3 === true) {
					$('#vegan').css('color', 'green')
				}

        $('#menuname4').text(menu.appetizers[3].name)
        $('#menuprice4').text(menu.appetizers[3].price)
        $('#menudescription4').text(menu.appetizers[3].description)

        		var allergy4 = menu.appetizers[3].extra.glutenfree
				if (allergy4 === true) {
					$('#allergy4').css('color', 'green')
				}
				var spicy4 = menu.appetizers[3].extra.spicy
				if (spicy4 === true) {
					$('#spicy4').css('color', 'green')
				}
				var vegetarian4 = menu.appetizers[3].extra.vegetarian
				if (vegetarian4 === true) {
					$('#vegan4').css('color', 'green')
				}


        $('#entreename1').text(menu.entrees[0].name)
        $('#entreeprice1').text(menu.entrees[0].price)
        $('#entreedescription1').text(menu.entrees[0].description)

        		var allergy11 = menu.entrees[0].extra.glutenfree
				if (allergy11 === true) {
					$('#allergy11').css('color', 'green')
				}
				var spicy22 = menu.entrees[0].extra.spicy
				if (spicy22 === true) {
					$('#spicy11').css('color', 'green')
				}
				var vegetarian33 = menu.entrees[0].extra.vegetarian
				if (vegetarian33 === true) {
					$('#vegan11').css('color', 'green')
				}

        $('#entreename2').text(menu.entrees[1].name)
        $('#entreeprice2').text(menu.entrees[1].price)
        $('#entreedescription2').text(menu.entrees[1].description)

        		var allergy22 = menu.entrees[1].extra.glutenfree
				if (allergy22 === true) {
					$('#allergy22').css('color', 'green')
				}
				var spicy22 = menu.entrees[1].extra.spicy
				if (spicy22 === true) {
					$('#spicy22').css('color', 'green')
				}
				var vegetarian22 = menu.entrees[1].extra.vegetarian
				if (vegetarian22 === true) {
					$('#vegan22').css('color', 'green')
				}

        $('#entreename3').text(menu.entrees[2].name)
        $('#entreeprice3').text(menu.entrees[2].price)
        $('#entreedescription3').text(menu.entrees[2].description)

        		var allergy33 = menu.entrees[2].extra.glutenfree
				if (allergy33 === true) {
					$('#allergy33').css('color', 'green')
				}
				var spicy33 = menu.entrees[2].extra.spicy
				if (spicy33 === true) {
					$('#spicy33').css('color', 'green')
				}
				var vegetarian33 = menu.entrees[2].extra.vegetarian
				if (vegetarian33 === true) {
					$('#vegan33').css('color', 'green')
				}

        $('#entreename3').text(menu.entrees[3].name)
        $('#entreeprice3').text(menu.entrees[3].price)
        $('#entreedescription3').text(menu.entrees[3].description)

        		var allergy44 = menu.entrees[3].extra.glutenfree
				if (allergy44 === true) {
					$('#allergy44').css('color', 'green')
				}
				var spicy44 = menu.entrees[3].extra.spicy
				if (spicy44 === true) {
					$('#spicy44').css('color', 'green')
				}
				var vegetarian44 = menu.entrees[3].extra.vegetarian
				if (vegetarian44 === true) {
					$('#vegan44').css('color', 'green')
				}


        $('#dessertname1').text(menu.desserts[0].name)
        $('#dessertprice1').text(menu.desserts[0].price)
        $('#dessertdescription1').text(menu.desserts[0].description)

        		var allergy111 = menu.desserts[0].extra.glutenfree
				if (allergy111 === true) {
					$('#allergy111').css('color', 'green')
				}
				var spicy111 = menu.desserts[0].extra.spicy
				if (spicy111 === true) {
					$('#spicy111').css('color', 'green')
				}
				var vegetarian111 = menu.desserts[0].extra.vegetarian
				if (vegetarian111 === true) {
					$('#vegan111').css('color', 'green')
				}

        $('#dessertname2').text(menu.desserts[1].name)
        $('#dessertprice2').text(menu.desserts[1].price)
        $('#dessertdescription2').text(menu.desserts[1].description)

        		var allergy222 = menu.desserts[1].extra.glutenfree
				if (allergy222 === true) {
					$('#allergy222').css('color', 'green')
				}
				var spicy222 = menu.desserts[1].extra.spicy
				if (spicy222 === true) {
					$('#spicy222').css('color', 'green')
				}
				var vegetarian222 = menu.desserts[1].extra.vegetarian
				if (vegetarian222 === true) {
					$('#vegan222').css('color', 'green')
				}

        $('#dessertname3').text(menu.desserts[2].name)
        $('#dessertprice3').text(menu.desserts[2].price)
        $('#dessertdescription3').text(menu.desserts[2].description)

        		var allergy333 = menu.desserts[3].extra.glutenfree
				if (allergy333 === true) {
					$('#allergy333').css('color', 'green')
				}
				var spicy333 = menu.desserts[3].extra.spicy
				if (spicy333 === true) {
					$('#spicy333').css('color', 'green')
				}
				var vegetarian333 = menu.desserts[3].extra.vegetarian
				if (vegetarian333 === true) {
					$('#vegan333').css('color', 'green')
				}

    })

    // Daily Special API
  var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

  $.getJSON(specialsJSON, function(specials) {

  

    $('#info-cards__food-item').text(specials.appetizers[0].name)

    $('#info-cards__food-description').text(specials.appetizers[0].description)

  })

})