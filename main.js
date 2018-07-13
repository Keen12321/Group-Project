
$(document).ready(function() {

    $(".hero img:gt(0)").hide()
    setInterval(function(){
      $(".hero :first-child").fadeOut()
      .next("img").fadeIn()
      .end().appendTo(".hero")
    }, 3000)

	
	$('.tab-panels .tabs li').on('click', function() {

		var $panel = $(this).closest('.tab-panels')
        var panelToShow = $(this).attr('rel')

        $panel.find('.panel.active').slideUp(showNextPanel)
        
        function showNextPanel() {
            $(this).removeClass('active')

            $('#' + panelToShow).slideDown(function() {
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



