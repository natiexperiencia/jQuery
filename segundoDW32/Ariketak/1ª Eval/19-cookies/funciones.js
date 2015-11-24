$(document).ready(function() {

	//disable input clave 
	$('#clave').focus(function(event) {
		$(this).attr('disabled', true);
	});

	//enable input clave for validation
	$('#clave').blur(function(event) {
		$(this).attr('disabled', false);
	});

	//botones random not repeat
	var numeros = [0,1,2,3,4,5,6,7,8,9];
	for (var i = 0; i < 10; i++) {
		var numero = Math.floor(Math.random()*numeros.length);
		var boton = $("<button value='"+numeros[numero]+"'></button>").text(numeros[numero]);
		$('#botones').append(boton);
		numeros.splice(numero,1);
	};

	//botones valor input, max length 4
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


	/*
	*	Validate
	*/
	//aditional method for dni
	jQuery.validator.addMethod("dni", function(value, element) {
		return this.optional(element) || /(\d{8})([-]?)([A-Z]{1})/i.test(value);
	});

	//rules
	var reglas = {
		nombre:{required:true, maxlength:30},
		lista:{required:true},
		dni:{required:true,dni:true},
		visa:{required:true,digits:true,maxlength:20,minlength:20},
		clave:{required:true,minlength:4,maxlength:4},
	};

	//messages
	var mensajes = {
		nombre:{required:" Nombre requerido"},
		lista:{required:" Seleccionar uno"},
		dni:{required:" DNI requerido",dni:" Debe ser un DNI válido"},
		visa:{required:" Número de Visa requerido", digits:" Debe ser un número", maxlength:" Máximo 20 dígitos", minlength:" Mínimo 20 dígitos"},
		clave:{required:" Clave requerida", minlength:" Mínimo 4 dígitos", maxlength:" Máximo 4 dígitos"},
	};

	//validate function
	$('#formulario').validate ({
		rules:reglas,
		messages:mensajes
	});

		
	/*$('#formulario').submit(function(event) {
		//solución
		var resultado = "Nombre: "+$('#nombre').val() + "<br/>Tipo de pago: "+$('#lista').val()+"<br/>DNI: "+$('#dni').val()+"<br/>Visa: "+$('#visa').val()+"<br/>Clave: "+$('#clave').val();
		if ($('#nombre').val()=="" || $('#lista').val()=="" || $('#dni').val()=="" || $('#visa').val()==0 || $('#clave').val()=="") {

		}else{
			$('#resp').html(resultado);
		}
		return false;
	});*/
	/*$('#formulario').submit(function (event) {
		datos = {
			nombre:$('#nombre').val(),
			tipoPago:$('#lista').val(),
			dni:$('#dni').val(),
			visa:$('#visa').val(),
			clave:$('#clave').val()
		};
		recuperar();
		return false;
	});

	function recuperar () {
		$('#resp').html("<h1>Nombre: "+datos.nombre+"</h1><h3>Tipo de pago: "+datos.tipoPago+
			"<br/>DNI: "+datos.dni+"<br/>Visa: "+datos.visa+"<br/>Clave: "+datos.clave+"</h3>");
	};*/
	$('#formulario').submit(function(event) {
		$.cookie('form', $('#nombre').val()+" "+$('#lista').val()+
			" "+$('#dni').val()+" "+$('#visa').val()+" "+$('#clave').val());
		/*$.cookie('tipoPago',$('#lista').val());
		$.cookie('dni',$('#dni').val());
		$.cookie('visa',$('#visa').val());
		$.cookie('clave',$('#clave').val());*/
		window.location.href="./resultado.html";
		return false;
	});
	/*$('#respuesta').click(function(event) {
		$('#resp').html("<h1>Nombre: "+$.cookie('nombre')+"</h1><h3>Tipo de pago: "+$.cookie('tipoPago')+
			"<br/>DNI: "+$.cookie('dni')+"<br/>Visa: "+$.cookie('visa')+"<br/>Clave: "+$.cookie('clave')+"</h3>");
	});*/
});