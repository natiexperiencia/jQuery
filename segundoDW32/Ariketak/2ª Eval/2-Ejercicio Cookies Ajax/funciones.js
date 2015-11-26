$(document).ready(function() {
	//definir variable moneda
	var moneda = "";

	//si la cookie no esta definida dar valor dolar a moneda
	if ($.cookie('divisa') == undefined) {
		moneda = "dolar";
	}else{
		//si la cookie esta definida dar el valor a moneda
		moneda = $.cookie('divisa');
	}
		//llamar a la funcion para crear la tabla con los datos
		recuperarDatos();

	//Al ejecutar el formulario darle valor a la cookie y a la moneda
	$('#form').submit(function(event) {
		event.preventDefault();
		var valor = $('#moneda').val();
		if (valor != null) {
			$.cookie('divisa',valor,{ expires: 10 });
			moneda = $.cookie('divisa');
		};
		recuperarDatos();		
	});

	//validación formulario añadir producto
	var reglas = {
		descripcion:{required:true},
		precioDolar:{required:true,digits:true,maxlength:6},
		precioDolarD:{required:true,digits:true,maxlength:2},
		precioEuro:{required:true,digits:true,maxlength:6},
		precioEuroD:{required:true,digits:true,maxlength:2},
		precioLibra:{required:true,digits:true,maxlength:6},
		precioLibraD:{required:true,digits:true,maxlength:2}
	}
	var mensajes = {
		descripcion:{required:" Descripción obligatoria"},
		precioDolar:{required:" Precio obligatorio",digits:" Unicamente digitos",maxlength:" Máximo 6 dígitos"},
		precioDolarD:{required:" Decimales requeridos", digits:" Unicamente digitos", maxlength:" Máximo 2 decimales"},
		precioEuro:{required:" Precio obligatorio",digits:" Unicamente digitos",maxlength:" Máximo 6 dígitos"},
		precioEuroD:{required:" Decimales requeridos", digits:" Unicamente digitos", maxlength:" Máximo 2 decimales"},
		precioLibra:{required:" Precio obligatorio",digits:" Unicamente digitos",maxlength:" Máximo 6 dígitos"},
		precioLibraD:{required:" Decimales requeridos", digits:" Unicamente digitos", maxlength:" Máximo 2 decimales"}
	}
	$('#formAdd').validate({
		rules:reglas,
		messages:mensajes
	});

	//Al ejecutar el formulario añadir el producto en la bd
	$('#formAdd').submit(function(event) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		$.ajax({
			url: 'insertarDatos.php',
			type: 'post',
			dataType: 'html',
			data: formData,
			success: function (data) {
				if (data == "ok") {
					alert("Datos isertados correctamente");
				}else{
					alert("Algo ha fallado");
				}
				recuperarDatos();
			}
		});
	});
	
	

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
					resp += data[i].dolares+" $</td></tr>";
				}else if (moneda == "euro") {
					resp += data[i].euros+" €</td></tr>";
				}else if (moneda == "libra") {
					resp += data[i].libras+" &#163;</td></tr>";
				};
			};
			resp += "</tbody>";
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
});