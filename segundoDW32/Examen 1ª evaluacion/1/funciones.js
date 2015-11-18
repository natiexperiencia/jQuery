$(document).ready(function() {
	inicioFoto1 = $('#foto1').attr('src');
	inicioFoto2 = $('#foto2').attr('src');
	inicioFoto3 = $('#foto3').attr('src');
	//Cambio 1
	$('#uno').click(function(event) {
		var foto1 = $('#foto1').attr('src');
		var foto2 = $('#foto3').attr('src');
		$('#foto1').attr('src', foto2);
		$('#foto3').attr('src', foto1);
	});

	//Cambio2
	$('#dos').click(function(event) {
		var foto1 = $('#foto3').attr('src');
		var foto2 = $('#foto1').attr('src');
		$('#foto3').attr('src', foto2);
		$('#foto1').attr('src', foto1);
	});

	//Cambio3
	$('#tres').click(function(event) {
		$('#foto3').attr('src', '../imagenes/Blanco.jpg');
	});

	//Cambio4
	$('#cuatro').click(function(event) {
		$('#foto1').attr('src', '../imagenes/Blanco.jpg');
	});

	//Cambio5
	$('#cinco').click(function(event) {
		$('#foto1').attr('src', '../imagenes/Blanco.jpg');
		$('#foto3').attr('src', '../imagenes/Blanco.jpg');
	});

	//Cambio6
	$('#seis').click(function(event) {
		$('#foto2').attr('src', inicioFoto1);
		$('#foto3').attr('src', inicioFoto1);
	});

	//Cambio7
	$('#siete').click(function(event) {
		$('#foto1').attr('src', inicioFoto3);
		$('#foto2').attr('src', inicioFoto3);
	});

	//Cambio8
	$('#ocho').click(function(event) {
		$('#foto1').attr('src', inicioFoto1);
		$('#foto2').attr('src', inicioFoto2);
		$('#foto3').attr('src', inicioFoto3);
	});
});