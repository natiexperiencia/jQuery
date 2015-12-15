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
					resp += "<table class='table'><tr><td>";
					resp += "<h3>"+data[i].id+" "+data[i].nombre+"</h3>";
					resp += "<img src='"+data[i].imagen+"' onclick='marcar()'>";
					resp += "</td></tr></table>";
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

function marcar () {
		alert("aSome");
	}