$(document).ready(function() {

	$.ajax({
		url: 'datos.php',
		type: 'post',
		dataType: 'json',
	
		succes: function (data) {
			//var resp = "<table><thead><tr><th>Descripción</th><th>Precio</th></tr></thead></table>";
			/*for (var i = 0;i<data.length; i++) {
				resp += "<tr><td>";
				resp += data[i].descripcion+"</td><td>"+data[i].dolares+"</td></tr>";
			};*/
			console.log(data);
			//$('#tabla').html("<p>helo</p>");
		}
	})
	.done(function() {
		console.log("done");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
});