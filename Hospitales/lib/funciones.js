$(document).ready(function() {

	$("nav p").hover(function() {
		$("nav p").stop();
		$("nav p").animate({
				backgroundColor:'red'
			}, 500);		
	}, function() {
		$("nav p").stop();
		$("nav p").animate({
				backgroundColor:'#441155'
			}, 500);
	});
	
	$('input[name=radio]').change(function(event) {
		if (this.value == "crear") {
			$("nav p").animate({
				backgroundColor:'red'
			}, 500);
			$("nav p").animate({
				backgroundColor:'#441155'
			}, 500);
			$("#crearConsulta").css({
				visibility: 'visible',
				display: 'block'
			});
			$(".radioBuscar").css({
				visibility: 'hidden',
				display: 'none'
			});
			$(".label").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#consultarConsultaMedico").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#consultarConsultaPaciente").css({
				visibility: 'hidden',
				display: 'none'
			});
			
		}else {
			$("nav p").animate({
				backgroundColor:'red'
			}, 500);
			$("nav p").animate({
				backgroundColor:'#441155'
			}, 500);
			$("#crearConsulta").css({
				visibility: 'hidden',
				display: 'none'
			});
			$(".radioBuscar").css({
				visibility: 'visible',
				display: 'block'
			});
			$(".label").css({
				visibility: 'visible',
				display: 'block'
			});
			
		}
	});

	$('input[name=radioBuscar').change(function(event) {
		if (this.value == "medico") {
			$("nav p").animate({
				backgroundColor:'green'
			}, 500);
			$("nav p").animate({
				backgroundColor:'#441155'
			}, 500);
			$("#consultarConsultaMedico").css({
				visibility: 'visible',
				display: 'block'
			});
			$("#consultarConsultaPaciente").css({
				visibility: 'hidden',
				display: 'none'
			});
		}else{
			$("nav p").animate({
				backgroundColor:'green'
			}, 500);
			$("nav p").animate({
				backgroundColor:'#441155'
			}, 500);
			$("#consultarConsultaMedico").css({
				visibility: 'hidden',
				display: 'none'
			});
			$("#consultarConsultaPaciente").css({
				visibility: 'visible',
				display: 'block'
			});
		}
	});

});//Ready