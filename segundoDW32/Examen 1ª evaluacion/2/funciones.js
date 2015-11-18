$(document).ready(function() {
	$('#clave').focus(function(event) {
		$(this).attr('disabled', true);
	});
	$('#clave').blur(function(event) {
		$(this).attr('disabled', false);
	});

	//botones random
	for(var i = 0; i < 11; i++){
		var numero = Math.floor(Math.random()*10);
		alert(numero);
	}
	//botones
	var valorTotal = "";
	$('button').click(function(event) {
		var valor = $(this).val();
		valorTotal += valor;
		if (valorTotal.length >= 5) {
			alert("No se pueden meter mas valores");
		}else{
			$('#clave').val(valorTotal);
		}
		return false;
	});
	jQuery.validator.addMethod("dni", function(value, element) {
		return this.optional(element) || /(\d{8})([-]?)([A-Z]{1})/i.test(value);
	});

	var reglas = {
		nombre:{required:true, maxlength:30},
		lista:{required:true},
		dni:{required:true,dni:true},
		visa:{required:true,digits:true,maxlength:20,minlength:20},
		clave:{required:true,minlength:4,maxlength:4},
	};

	var mensajes = {
		nombre:{required:" Nombre requerido"},
		lista:{required:" Seleccionar uno"},
		dni:{required:" DNI requerido",dni:" Debe ser un DNI válido"},
		visa:{required:" Número de Visa requerido", digits:" Debe ser un número", maxlength:" Máximo 20 dígitos", minlength:" Mínimo 20 dígitos"},
		clave:{required:" Clave requerida", minlength:" Mínimo 4 dígitos", maxlength:" Máximo 4 dígitos"},
	};

	$('#formulario').validate ({
		rules:reglas,
		messages:mensajes
	});

		//no coge valor como variable global
		//var resultado = "Nombre: "+$('#nombre').val() + "<br/>Tipo de pago: "+$('#lista').val()+"<br/>DNI: "+$('#dni').val()+"<br/>Visa: "+$('#visa').val()+"<br/>Clave: "+$('#clave').val();
	$('#formulario').submit(function(event) {
		//solución
		var resultado = "Nombre: "+$('#nombre').val() + "<br/>Tipo de pago: "+$('#lista').val()+"<br/>DNI: "+$('#dni').val()+"<br/>Visa: "+$('#visa').val()+"<br/>Clave: "+$('#clave').val();
		if ($('#nombre').val() == "") {

		}else{
			$('#resp').html(resultado);
		}
		return false;
	});
});