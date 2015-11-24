$(document).ready(function() {

	$(".input_text").mouseenter(function() {  
    	$(this).addClass("input_text_encima");  
	});  
	$(".input_text").mouseleave(function() {  
    	$(this).removeClass("input_text_encima");  
	});

	$(".input_text").focus(function() {  
    	$(this).addClass("input_text_dentro");  
	});  
	$(".input_text").blur(function() {  
    	$(this).removeClass("input_text_dentro");  
	});
	$('#form').submit(function(event) {
		if ($('#nombre').val().length<5) {
			$('#nombre').addClass('input_text_error');
			return false;
		}
		if ($('#telefono').val().length<9) {
			$('#telefono').addClass('input_text_error');
			return false;
		}
		return false;
	});

});