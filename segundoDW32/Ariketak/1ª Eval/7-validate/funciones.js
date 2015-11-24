$(document).ready(function() {
	jQuery.validator.addMethod("nif", function(value, element) {
		return this.optional(element) || /(\d{8})([-]?)([A-Z]{1})/i.test(value);
	});

	var reglas = {
		nombre:{required:true},
		apellidos:{required:true,minlength:6,maxlength:30},
		fecha:{required:true,dateITA:true},
		nif:{required:true,nif:true},
		postal:{required:true,digits:true,maxlength:5,minlength:5},
		correo:{required:true,email:true},
		blog:{url:true},
	};

	var mensajes = {
		nombre:{required:" Nombre requerido"},
		apellidos:{required:" Apellido requerido",maxlength:" Máximo 30 caracteres", minlength:" Mínimo 6 caracteres"},
		fecha:{required:" Fecha requerida", dateITA:" Formato de fecha no válido"},
		nif:{required:" NIF requerido",nif:" Debe ser un NIF válido"},
		postal:{required:" Código postal requerido", digits:" Debe ser un número", maxlength:" Máximo 5 dígitos", minlength:" Mínimo 5 dígitos"},
		correo:{required:" E-Mail requerido", email:" Debe ser un E-Mail válido"},
		blog:{url:" Debe ser una dirección URL válida"},
	};

	$('#formulario').validate ({
		rules:reglas,
		messages:mensajes
	});
});