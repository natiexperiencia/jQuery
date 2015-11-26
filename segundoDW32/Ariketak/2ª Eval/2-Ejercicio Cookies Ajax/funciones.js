$(document).ready(function() {

	var moneda = "dolar";
	recuperarDatos();

	function recuperarDatos () {
		$.ajax({
		url: 'datos.php',
		type: 'post',
		dataType: 'json',
	
		success: function (data) {
			var resp = "<thead><tr><th>Descripción</th><th>Precio</th></tr></thead><tbody>";
			for (var i = 0;i<data.length; i++) {
				resp += "<tr><td>";
				resp += data[i].descripcion+"</td><td>";
				if (moneda == "dolar") {
					resp += data[i].dolares+"</td></tr>";
				}else if (moneda == "euro") {
					resp += data[i].euros+"</td></tr>";
				}else if (moneda == "libra") {
					resp += data[i].libras+"</td></tr>";
				};
			};
			resp += "</tbody>";
			console.log(data);
			$('#tabla').html(resp);
		}
		})
		.done(function() {
			$('#tabla').tablesorter();
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}//function

	$('#form').submit(function(event) {
		event.preventDefault();
		var cookie = $.cookie('divisa',$('#moneda').val());
		alert(cookie);
	});
});