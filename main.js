
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
    // Daily Special API
  var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

  $.getJSON(specialsJSON, function(specials) {

    // $('#info-cards__food-photo').text(data.appetizers[0].image) // TO DO: add photos to be pulled depending on date @victorinspce

    $('#info-cards__food-item').text(specials.appetizers[0].name)

    $('#info-cards__food-description').text(specials.appetizers[0].description)

  })

})