$(document).ready(function() {
	$("#foto").click(function(event) {
		$(this).fadeTo('slow', 0.5);
		$("#texto").fadeIn('slow');
	});

	$("#texto").click(function(event) {
		$(this).fadeOut('slow');
		$("#foto").fadeTo('slow', 1);
	});
});