$(document).ready(function() {
	$('#mostrar').click(function(event) {
		$('#parrafo1').slideDown(400);
		$('#parrafo2').slideDown(400);
	});
	$('#ocultar').click(function(event) {
		$('#parrafo1').slideUp(400);
		$('#parrafo2').slideUp(400);
	});
	$('#alternar').click(function(event) {
		$('#parrafo1').slideToggle(400);
		$('#parrafo2').slideToggle(800);
	});
});