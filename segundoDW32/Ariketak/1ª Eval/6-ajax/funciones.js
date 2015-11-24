$(document).ready(function() {
	$('button').click(function(event) {
		$.ajax({
			url: "test.txt",
			success: function (result) {
				$('#contenedor').html(result);
		}});	
	});
});