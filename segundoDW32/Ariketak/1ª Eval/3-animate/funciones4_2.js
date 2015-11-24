$(document).ready(function() {
	$('button').click(function(event) {
		$('#uno').fadeIn(function() {
			$(this).animate({
				opacity:'0.5'
			})
		});

		$('#dos').fadeIn('slow', function() {
			$(this).animate({
				opacity:'0.3'
			}, 'slow')
		});

		$('#tres').fadeIn('3', function() {
			$(this).animate({
				opacity:'0.1'
			}, '3')
		});

	});//button click
});//ready