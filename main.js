$(function () {

	var specialsAPI = 'https://obscure-tundra-54269.herokuapp.com/bar-food'
	$.getJSON(specialsAPI, function(data) {
		console.log('I have recieved the specials, sir!')
		console.log(data.appetizers)
	})

})