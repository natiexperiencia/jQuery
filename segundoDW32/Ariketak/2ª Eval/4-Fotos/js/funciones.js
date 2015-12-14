$(document).ready(function() {
	
	//Buscar alumnos al escribir
	$('#nombre').keyup(function(event) {
		buscarAlumnos();
	});

	//Buscar alumnos al clicar Buscar
	$('#form').submit(function(event) {
		event.preventDefault();
		buscarAlumnos();
	});


	//Funcion con ajax para recoger datos alumnos
	function buscarAlumnos () {
		var formData = $('#form').serializeArray();
		$.ajax({
			url: 'php/buscaAlumnos.php',
			type: 'post',
			dataType: 'json',
			data: formData,
			success:function (data) {
				var resp = "";
				for (var i = 0; i < data.length; i++) {
					resp += "<h3>"+data[i].id+" "+data[i].nombre+"</h3>";
				};
				$('#resultado').html(resp);
			}
		})//ajax
		.done(function() {
			console.log("success");
		})//done
		.fail(function() {
			console.log("error");
		})//fail
		.always(function() {
			console.log("complete");
		});//always
	}//function buscarAlumnos

});//ready