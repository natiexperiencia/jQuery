/**
 * 
 */

$(document).ready(function() {
	var tipo;
	
	$('input[name=radio]').change( function(){
		if(this.value == 'libro'){
			$('#cuerpoLibro').css('visibility', 'visible');
			$('#cuerpoLibro').css('display', 'block');
			$('#cuerpoDisco').css('visibility', 'hidden');
			$('#cuerpoDisco').css('display', 'none');
			$('#cuerpoPelicula').css('visibility', 'hidden');
			$('#cuerpoPelicula').css('display', 'none');
		}else if(this.value == 'disco'){
			$('#cuerpoLibro').css('visibility', 'hidden');
			$('#cuerpoLibro').css('display', 'none');
			$('#cuerpoDisco').css('visibility', 'visible');
			$('#cuerpoDisco').css('display', 'block');
			$('#cuerpoPelicula').css('visibility', 'hidden');
			$('#cuerpoPelicula').css('display', 'none');
		}else{
			$('#cuerpoLibro').css('visibility', 'hidden');
			$('#cuerpoLibro').css('display', 'none');
			$('#cuerpoDisco').css('visibility', 'hidden');
			$('#cuerpoDisco').css('display', 'none');
			$('#cuerpoPelicula').css('visibility', 'visible');
			$('#cuerpoPelicula').css('display', 'block');
		}
	});//Radio-change-function
	
		$("#form").validate({
			rules:{
				titulo:"required",
				anoEdicion:{
					required:true,
					digits:true,
					maxlength:4,
					minlength:4
				},
				editorial:"required",
				numPaginas:{
					required:true,
					digits:true,
					maxlength:4
				},
				nAutor:"required",
				aAutor:{
					required:true,
					digits:true,
					maxlength:4,
					minlength:4
				}
			},//rules
			messages:{
				titulo:{
					required:"Introduce un título"
				},
				anoEdicion:{
					required:"Introduce un año",
					digits:"Tiene que ser número",
					maxlength:"Máximo 4 dígitos",
					minlength:"Mínimo 4 dígitos"
				},
				editorial:{
					required:"Introduce un nombre de editorial"
				},
				numPaginas:{
					required:"Introduce un número de páginas",
					digits:"Tiene que ser un número",
					maxlength:"No permitido mas de 4 dígitos"
				},
				nAutor:{
					required:"Introduce un nombre de autor"
				},
				aAutor:{
					required:"Introduce un año",
					digits:"Tiene que ser número",
					maxlength:"Máximo 4 dígitos",
					minlength:"Mínimo 4 dígitos"
				}
			}//messages
		});//validate
	
});//Ready