$(document).ready(function() {
	$('#form').validate({

		rules:{
			radio:"required"
		},
		messages:{
			radio:"Necesario"
		},
		errorPlacment: function (error,element) {
			if( element.is(":radio") || element.is(":checkbox")){
				error.appendTo(element.parent());
			}else{
				error.appendTo(element);
			}
		}
	});
});