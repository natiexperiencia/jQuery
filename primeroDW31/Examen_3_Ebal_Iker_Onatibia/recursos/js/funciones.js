$(document).ready(function() {
	

	//Menú
	$('#menu1').hover(function() {
		$('#sub1').fadeToggle('fast', function() {	
		});
	}, function() {
		$('#sub1').fadeToggle('fast', function() {	
		});
	});
	$('#menu1').click(function(event) {
		$('#sub1').fadeToggle('fast', function() {
			
		});
	});
	$('#sub1').hover(function() {
		$(this).fadeIn('fast', function() {
			
		});
	}, function() {
		$(this).fadoOut('fast', function() {
			
		});
	});
	$('#sub1').click(function(event) {
		$(this).fadeToggle('fast', function() {
			
		});
	});

	$('#menu2').hover(function() {
		$('#sub2').fadeToggle('fast', function() {	
		});
	}, function() {
		$('#sub2').fadeToggle('fast', function() {	
		});
	});
	$('#menu2').click(function(event) {
		$('#sub2').fadeToggle('fast', function() {
			
		});
	});
	$('#sub2').hover(function() {
		$(this).fadeIn('fast', function() {
			
		});
	}, function() {
		$(this).fadeOut('fast', function() {
			
		});
	});

	$('#menu3').hover(function() {
		$('#sub3').fadeToggle('fast', function() {	
		});
	}, function() {
		$('#sub3').fadeToggle('fast', function() {	
		});
	});
	$('#menu3').click(function(event) {
		$('#sub3').fadeToggle('fast', function() {
			
		});
	});
	$('#sub3').hover(function() {
		$(this).fadeIn('fast', function() {
			
		});
	}, function() {
		$(this).fadeOut('fast', function() {
			
		});
	});

	$('#menu4').hover(function() {
		$('#sub4').fadeToggle('fast', function() {	
		});
	}, function() {
		$('#sub4').fadeToggle('fast', function() {	
		});
	});
	$('#menu4').click(function(event) {
		$('#sub4').fadeToggle('fast', function() {
			
		});
	});
	$('#sub4').hover(function() {
		$(this).fadeIn('fast', function() {
			
		});
	}, function() {
		$(this).fadeOut('fast', function() {
			
		});
	});

	var contador = 1;
	//Película seleccionada
	
	$('#siguiente').click(function(event) {
		contador++;

		if (contador == 2) {
			$('#peli1').css('opacity', '0.5');
			$('#peli2').css('opacity', '1');
			$('#peli3').css('opacity', '0.5');
			$('#peli4').css('opacity', '0.5');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/hombresmujeres.png")');
			$('#anterior').css('opacity', '1');
			$('#director').html("Jason Reitman");
			$('#genero').html("Comedia drámatica");
			$('#etiqueta2').css('margin-left', '-310px');
			$('#genero').css('margin-left', '-180px');
		};

		if (contador == 3) {
			$('#peli1').css('opacity', '0.5');
			$('#peli2').css('opacity', '0.5');
			$('#peli3').css('opacity', '1');
			$('#peli4').css('opacity', '0.5');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/magia.png")');
			$('#anterior').css('opacity', '1');
			$('#director').html("Woody Allen");
			$('#genero').html("Comedia, Romántico");
			$('#etiqueta2').css('margin-left', '-290px');
			$('#genero').css('margin-left', '-160px');
		};
		if (contador == 4) {
			$('#peli1').css('opacity', '0.5');
			$('#peli2').css('opacity', '0.5');
			$('#peli3').css('opacity', '0.5');
			$('#peli4').css('opacity', '1');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/mortadelofilemon.png")');
			$('#siguiente').css('opacity', '0');
			$('#director').html("Javier Fesser");
			$('#genero').html("Comedia, Familia, Animación");
			$('#etiqueta2').css('margin-left', '-300px');
			$('#genero').css('margin-left', '-170px');
		};

	});

	$('#anterior').click(function(event) {
		contador--;
		if (contador == 1) {
			$('#peli1').css('opacity', '1');
			$('#peli2').css('opacity', '0.5');
			$('#peli3').css('opacity', '0.5');
			$('#peli4').css('opacity', '0.5');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/goodpeople.png")');
			$('#anterior').css('opacity', '0');
			$('#director').html("Henrik Ruben Genz");
			$('#genero').html("Suspense, Crimen, Acción");
			$('#etiqueta2').css('margin-left', '-370px');
			$('#genero').css('margin-left', '-240px');
		};

		if (contador == 2) {
			$('#peli1').css('opacity', '0.5');
			$('#peli2').css('opacity', '1');
			$('#peli3').css('opacity', '0.5');
			$('#peli4').css('opacity', '0.5');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/hombresmujeres.png")');
			$('#anterior').css('opacity', '1');
			$('#director').html("Jason Reitman");
			$('#genero').html("Comedia drámatica");
			$('#etiqueta2').css('margin-left', '-310px');
			$('#genero').css('margin-left', '-180px');
		};

		if (contador == 3) {
			$('#peli1').css('opacity', '0.5');
			$('#peli2').css('opacity', '0.5');
			$('#peli3').css('opacity', '1');
			$('#peli4').css('opacity', '0.5');
			$('#imagenPeliculaSeleccionada').css('background-image', 'url("recursos/imagenes/magia.png")');
			$('#anterior').css('opacity', '1');
			$('#siguiente').css('opacity', '1');
			$('#director').html("Woody Allen");
			$('#genero').html("Comedia, Romántico");
			$('#etiqueta2').css('margin-left', '-290px');
			$('#genero').css('margin-left', '-160px');
		};
	});
	var contador3 = 0;
	var contador2 = 0;
	var puntuacion = 0;
	$('#puntuacion').html(puntuacion);
	
	$('#submit1').click(function(event) {
		if (contador2 == 0) {
			var resultado = $('input[name=radio]:checked').val();
			if (resultado == 'henrik') {
				puntuacion +=1;
			};
			contador2++;
		}else{
			alert("No se puede volver a contestar la misma pregunta");
		}
		$('#puntuacion').html(puntuacion);
	});

	$('#submit2').click(function(event) {
		if (contador3 == 0) {
			var resultado = $('input[name=radioB]:checked').val();
			if (resultado == 'woody') {
				puntuacion +=1;
			};
			contador3++;
		}else{
			alert("No se puede volver a contestar la misma pregunta");
		}
		$('#puntuacion').html(puntuacion);
	});
	
});//Ready 