$(document).ready(function() {
	var cachos = $.cookie('form').split(" ");
	var datos = "<h2>Nombre: "+cachos[0]+"</h2><br/>Tipo de pago: "+cachos[1]+"<br/>DNI: "
	+cachos[2]+"<br/>Visa: "+cachos[3]+"<br/>Clave: "+cachos[4];
	$('#resp').html(datos);
});