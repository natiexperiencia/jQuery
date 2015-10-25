$(document).ready(function() {
	$('#boton').click(function(event) {
		$('#parrafo').animate({
			opacity:'0',
		}, 'fast')
	});

	$('#boton2').click(function(event) {
		$('#parrafo').animate({
			opacity:'1'
		}, 'fast')
	});
});