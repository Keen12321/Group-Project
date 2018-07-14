$(function () {

	var specialsAPI = 'https://obscure-tundra-54269.herokuapp.com/bar-food'
	$.getJSON(specialsAPI, function(data) {
		// $('#info-cards__food-photo').text(data.appetizers[0].image)
		$('#info-cards__food-item').text(data.appetizers[0].name)
		$('#info-cards__food-description').text(data.appetizers[0].description)
	})

    $(".hero img:gt(0)").hide()
    setInterval(function(){
      $(".hero :first-child").fadeOut()
      .next("img").fadeIn()
      .end().appendTo(".hero")
    }, 5000)

	$('.tab-panels .tabs li').on('click', function() {

		 var $panel = $(this).closest('.tab-panels')

        $panel.find('.tabs li.active').removeClass('active')
        $(this).addClass('active')

        $panel.find('panel.active').slideUp(650, panelToShow)

        var panelToShow = $(this).attr('rel')


        function showNextPanel() {
          $(this).removeClass('active')


          $('#'+panelToShow).slideDown(650, function() {
          $(this).addClass('active')
        })
      }
	})


    var menuJSON = 'https://obscure-tundra-54269.herokuapp.com/casual-dining'
    $.getJSON (menuJSON, function(menu) {
        const name = document.getElementById('menuname')
        const price = document.getElementById('menuprice')
        const description = document.getElementById('menudescription')

        menu.appetizers.forEach(function(data) {
            name.append(data.name)
        })

        menu.appetizers.forEach(function(data) {
            price.append(data.price)
        })

        menu.appetizers.forEach(function(data) {
            description.append(data.description)
        })
    })

})
