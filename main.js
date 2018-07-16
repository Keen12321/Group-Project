$(document).ready(function() {

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


        function showNextPanel() {
            $(this).removeClass('active')

            $('#'+panelToShow).slideDown(function() {
                $(this).addClass('active')
            })
        }
        $panel.find('.panel.active').slideUp(showNextPanel)

  })

  $("#nav1").on('click', function(){
               // if ($('.tabs li.active') == true) {
               $('#panel2').removeClass('active').css("display", "none")
               $('#panel3').removeClass('active').css("display", "none")
             $("#panel1").addClass('active').css("display", "inline-block")
             $(".tabs li.active").removeClass("active")
             $(".tabs li:first-child").addClass("active")
             })
 
 
 
  $("#nav2").on('click', function(){
             // if ($('.tabs li.active') == true) {
               $('#panel1').removeClass('active').css("display", "none")
               $('#panel3').removeClass('active').css("display", "none")
             $("#panel2").addClass('active').css("display", "inline-block")
             $(".tabs li.active").removeClass("active")
             $(".tabs li:nth-child(2)").addClass("active")
             })
 
 
     
  $("#nav3").on('click', function(){
               // if ($('.tabs li.active') == true) {
               $('#panel1').removeClass('active').css("display", "none")
               $('#panel2').removeClass('active').css("display", "none")
             $("#panel3").addClass('active').css("display", "inline-block")
             $(".tabs li.active").removeClass("active")
             $(".tabs li:nth-child(3)").addClass("active")
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
    // Daily Special API
  var specialsJSON = 'https://obscure-tundra-54269.herokuapp.com/bar-food'

  $.getJSON(specialsJSON, function(specials) {

    // $('#info-cards__food-photo').text(data.appetizers[0].image) // TO DO: add photos to be pulled depending on date @victorinspce

    $('#info-cards__food-item').text(specials.appetizers[0].name)

    $('#info-cards__food-description').text(specials.appetizers[0].description)

  })
  
})

