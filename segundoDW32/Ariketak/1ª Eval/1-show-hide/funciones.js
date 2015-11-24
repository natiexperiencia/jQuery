$(document).ready(function() {

	$("#mostrar").click(function(event) {
		$("#foto").show('slow');
		$("#mostrar").hide('fast');
		$("#ocultar").show('fast');
	});

	$("#ocultar").click(function(event) {
		$("#foto").hide('slow');
		$("#mostrar").show('fast');
		$("#ocultar").hide('fast');
	});

});//Ready