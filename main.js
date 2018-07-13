
$(document).ready(function() {

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

        var panelToShow = $(this).attr('rel')

        $panel.find('.panel.active').slideUp(650, showNextPanel)

        function showNextPanel() {
            $(this).removeClass('active')

            $('#'+panelToShow).slideDown(650, function() {
                $(this).addClass('active')
            })

        }
          

	})

 $("#nav1").on('click', function(){
              // if ($('.tabs li.active') == true) {
              $('#panel2').removeClass('active').css("display", "none")
              $('#panel3').removeClass('active').css("display", "none")
            $("#panel1").addClass('active').css("display", "inline-block")
             console.log('message here', $('.tabs li.active'))
            })



 $("#nav2").on('click', function(){
            // if ($('.tabs li.active') == true) {
              $('#panel1').removeClass('active').css("display", "none")
              $('#panel3').removeClass('active').css("display", "none")
            $("#panel2").addClass('active').css("display", "inline-block")
             console.log('another message', $('.tabs li.active'))
            })


    
 $("#nav3").on('click', function(){
              // if ($('.tabs li.active') == true) {
              $('#panel1').removeClass('active').css("display", "none")
              $('#panel2').removeClass('active').css("display", "none")
            $("#panel3").addClass('active').css("display", "inline-block")
            })

  })  
// })



