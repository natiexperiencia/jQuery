$(document).ready(function() {
	$('#boton').click(function(event) {
		$('#imagen').animate({
			width:'80%',
		},3000);
	});

	$('#imagen').click(function(event) {
		$(this).animate({
			width:'30%',
		}, 3000)
	});
});