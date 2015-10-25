$(document).ready(function() {
	
	$("#form").validate({

		rules:{
			dniMedico:{
				required:true,
				maxlength:8,
				minlength:8
			},
			dniPaciente:{
				required:true,
				maxlength:8,
				minlength:8
			},
			dniMedicoConsulta:{
				required:true,
				maxlength:8,
				minlength:8
			},
			dniPacienteConsulta:{
				required:true,
				maxlength:8,
				minlength:8
			},
			fecha:{
				required:true,
				date:true,
			},
			radioBuscar:"required",
			radio:"required"
		},//Rules

		messages:{
			dniMedico:{
				required:"Necesario DNI del Médico",
				maxlength:"Máximo 8 dígitos",
				minlength:"Mínimo 8 dígitos"
			},
			dniPaciente:{
				required:"Necesario DNI del Paciente",
				maxlength:"Máximo 8 dígitos",
				minlength:"Mínimo 8 dígitos"
			},
			dniMedicoConsulta:{
				required:"Necesario DNI del Médico",
				maxlength:"Máximo 8 dígitos",
				minlength:"Mínimo 8 dígitos"
			},
			dniPacienteConsulta:{
				required:"Necesario DNI del Paciente",
				maxlength:"Máximo 8 dígitos",
				minlength:"Mínimo 8 dígitos"
			},
			fecha:{
				required:"Necesaria una fecha",
				date:"Tiene que ser una fecha válida"
			},
			radioBuscar:"Necesario para el tipo de consulta",
			radio:"Necesario"
		},//Messages
		errorPlacment: function(error,element){
			if( element.is(":radio") || element.is(":checkbox")){
				error.appendTo(element.parent());
			}else{
				error.insertAfter(element);
			}
		}
	});

});//Ready