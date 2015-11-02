$(document).ready(function() {
	$('#textarea').focus(function(event) {
		$(this).css('backgroundColor', 'lightblue');
	});
	$('#textarea').focusout(function(event) {
		$(this).css('backgroundColor', 'white');
	});
	$('#resp').innerHTML="";
	$('.input_text').focus(function(event) {
		$(this).addClass('input_text_seleccionado');
	});

	var reglas = {
		nombre:{required:true,maxlength:30,minlength:2},
		textarea:{required:true,letterswithbasicpunc:true},
		radio:{required:true},
		checkbox:{required:true},
		select:{required:true},
	};

	var mensajes = {
		nombre:{required:"Nombre obligatorio",maxlength:"Máximo 30 caracteres", minlength:"Mínimo 2 caracteres"},
		textarea:{required:"Opinion obligatoria", letterswithbasicpunc:"Cáracteres no permitidos"},
		radio:{required:"Campo obligatorio"},
		checkbox:{required:"No has aceptado las políticas"},
		select:{required:"Selecciona alguno"},
	};

	$('#formulario').validate({
		rules:reglas,
		messages:mensajes,
		errorPlacement: function(error,element){
			element.before(error);
					/*if(element.is(":radio")){
						error.insertAfter('.ultimoradio');
					}else{
						error.insertAfter(element);
					}*/	
				}
	});

	$('#mostrar').click(function(event) {
		$('#resp').html("Nombre: " + $('#nombre').val() + "<br/>Opinion: " + $('#textarea').val() + "<br/>Seguro?: " + $('#radio').val() 
			+ "<br/>Has leído las condiciones: " + $('#leido').val() + "<br/>Has leido las políticas: " + $('#privacidad').val() + 
			"<br/>Selección: " + $('#select').val());
			return false;
	});

	$('#formulario').submit(function(event) {
		$('#resp').html("Nombre: " + $('#nombre').val() + "<br/>Opinion: " + $('#textarea').val() + "<br/>Seguro?: " + $('#radio').val() 
			+ "<br/>Has leído las condiciones: " + $('#leido').val() + "<br/>Has leido las políticas: " + $('#privacidad').val() + 
			"<br/>Selección: " + $('#select').val());
		return false;
	});
});