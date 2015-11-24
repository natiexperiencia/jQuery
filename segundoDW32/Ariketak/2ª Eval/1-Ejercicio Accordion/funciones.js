$(document).ready(function() {
	$('#formulario').submit(function(event) {
		console.log("submit");
		event.preventDefault();

		$('#resp').html('');

		$.ajax({
			url: 'datos.php',
			type: 'post',
			dataType: 'json',
			success: function (data) {
				var resp = "";
				for (var i = 0; i < data.length; i++) {
					resp += "<h3>"+data[i].id+" "+data[i].nombre+"</h3>";
					resp += "<div><img src='fotos/"+data[i].foto+".jpg'/></div>";
				};
				$('#resp').html(resp);
				$('#resp').accordion({
					collapsible:true,
					active:false
				});
			}
		});//ajax
	});//submit
});