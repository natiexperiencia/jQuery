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

	$('#resultado').on("click",".celda",function () {
		var datos = $(this).contents();
		var personaje = buscarAlumnoPorId(datos[0].id);
		alert(personaje);
		//var formulario = "<form id='formUpdate'><input type='text' value='"+datos[0].name+"'>";
		//$('#resultado').html(formulario);
		//alert(datos[0].id);
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
					resp += "<table class='table'><tr><td class='celda'>";
					resp += "<h3 id='"+data[i].id+"'>"+data[i].id+" "+data[i].nombre+"</h3>";
					resp += "<img src='"+data[i].imagen+"'>";
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


	function buscarAlumnoPorId (idAlumno) {
		var dato = {'id':idAlumno};
		$.ajax({
			url: 'php/buscarAlumnoPorId.php',
			type: 'post',
			dataType: 'json',
			data: dato,
			success:function (data) {
				return data;
				console.log(data);
			}
		})//ajax
		.done(function() {
			console.log("success");
		})//done
		.fail(function() {
			console.log("error");
		})//fail
	}//function buscarAlumnos
	
});//ready

