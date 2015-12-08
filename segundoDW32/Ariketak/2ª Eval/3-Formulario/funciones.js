$(document).ready(function() {
	//Comprobar si la cookie está definida, si no lo está le damos el valor 0, si no, le damos el valor que tenía
	//a la variable intentos
	if ($.cookie('intentos')==undefined) {
		intentos = 0;
		$.cookie('intentos',intentos);
	}else{
		intentos = $.cookie('intentos');
	}
	//Ponemos la cantidad de intentos en el div intentos
	$('#intentos').html($.cookie('intentos'));

	//Al perder el foco los campos de nombre y apellido, convertimos su valor a Uppercase
	$('#nombre').blur(function(event) {
		$(this).val($(this).val().toUpperCase());
	});
	$('#apellido').blur(function(event) {
		$(this).val($(this).val().toUpperCase());
	});

	//(\{8}):debe tener 8 dígitos
	//([-]):debe tener un guión
	//([A-Z]{1}):debe tener una letra
	jQuery.validator.addMethod("dni", function(value, element) {
		return this.optional(element) || /(\d{8})([-])([A-Z]{1})/i.test(value);
	});

	//^[_a-z0-9-]: Puede empezar por cualquier letra, número o guión y contener cualquiera de ellos
	//(\.[_a-z0-9-]+)*:Puede seguirle después de un punto cualquier caracter como los de antes y repetir
	//@:tiene que tener una arroba
	//[a-z0-9-]+(\.[a-z0-9-]+)*:Igual que las reglas primeras pero sin el guión bajo
	//(\.[a-z]{2,3})$:Después de un punto debe tener 2 o 3 letras
	jQuery.validator.addMethod("email", function(value, element) {
		return this.optional(element) || /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i.test(value);
	});

	//(\d{3}):Debe tener 3 dígitos
	//([-]):debe tener un guión
	//(\d{6})$:debe acabar con 6 dígitos
	jQuery.validator.addMethod("telefono", function(value, element) {
		return this.optional(element) || /^(\d{3})([-])(\d{6})$/i.test(value);
	});

	//([0-9]):Puede empezar con un número del 0 al 9
	// |: or
	// 0[0-9]:Puede empezar con un número del 00 al 09
	// |: or
	// 1[0-9]:Puede empezar con un número del 10 al 19
	// |: or
	// 2[0-3]:Puede empezar con un número del 20 al 23
	// : Seguido de 2 puntos
	//[0-5]: Un dígito del 0 al 5
	//[0-9]:Termina con un número del 0 al 9
	jQuery.validator.addMethod("hora", function(value, element) {
		return this.optional(element) || /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i.test(value);
	});
	 

	var reglas = {
		nombre:{required:true},
		apellido:{required:true},
		edad:{required:true,digits:true,max:105,min:0},
		dni:{required:true,dni:true},
		email:{required:true,email:true},
		provincias:{required:true},
		fecha:{required:true},
		telefono:{required:true,telefono:true},
		hora:{required:true,hora:true},
	};
	//Mensajes de la validación
	var mensajes = {
		nombre:{required:" Obligatorio"},
		apellido:{required:" Obligatorio"},
		edad:{required:" Obligatorio",digits:" Solo números",max:" Máximo 105",min:" Mínimo 0"},
		dni:{required:" Obligatorio",dni:" Debe ser un DNI válido"},
		email:{required:" Obligatorio",email:" Debe ser un e-mail válido"},
		provincias:{required:" Obligatorio"},
		fecha:{required:" Obligatorio"},
		telefono:{required:" Obligatorio",telefono:" Debe ser un número de teléfono"},
		hora:{required:" Obligatorio",hora:" Debe ser una hora válida"},
	}

	$('#form').validate({
		rules:reglas,
		messages:mensajes,
		errorClass:"invalid",
		//Si falla la validación, sumamos 1 a los intentos y los pintamos, mostramos número de errores
		invalidHandler:function (event,validator) {
			$.cookie('intentos',++intentos);
			$('#intentos').html($.cookie('intentos'));
			$('#errores').html(validator.numberOfInvalids());
		},
		//Si la validación es correcta, sumamos 1 a los intentos y los pintamos y
		// mandamos los datos del formulario para insertar
		submitHandler:function (form) {
			$.cookie('intentos',++intentos);
			$('#intentos').html($.cookie('intentos'));
			if (confirm("Seguro que quieres enviar el formulario???")) {
				var formData = $('#form').serializeArray();
				$.ajax({
					url: 'insertarDatos.php',
					type: 'post',
					dataType: 'html',
					data: formData,
					success:function (data) {
						if (data == "ok") {
							alert("Datos insertados correctamente");
							$('input').val("");
							$('select').val("");
						}else{
							alert(data);
						}
					}
				})
				.fail(function() {
					console.log("error");
				});
				
			}else{
				return false;
			}
		},
	});
});	