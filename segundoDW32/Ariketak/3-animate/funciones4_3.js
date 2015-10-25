$(document).ready(function() {
	$('button').click(function(event) {
		$('#uno').fadeOut(function() {
			$(this).animate({
				opacity:'1'
			})
		});

		$('#dos').fadeOut('slow', function() {
			$(this).animate({
				opacity:'1'
			}, 'slow')
		});

		$('#tres').fadeOut(3000, function() {
			$(this).animate({
				opacity:'1'
			}, 3000)
		});

		$('div').fadeIn('slow', function() {
			
		});

	});//button click

});//ready