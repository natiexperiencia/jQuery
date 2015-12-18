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
		buscarAlumnoPorId(datos[0].id)
		.done(function(result) {
    		var formulario = "<form class='form-group' id='formUpdate'>Nombre: <input type='text' id='nombre' name='nombre' class='form-control' value='"+result.nombre+"'>";
    		formulario += "<br/>Imagen: <input type='text' id='imagen' name='imagen' class='form-control' value='"+result.imagen+"'>";
    		formulario += "<br/><input type='submit' id='btnModificar' class='btn btn-warning' value='Modificar'>";
    		formulario += "&nbsp;<button class='btn btn-primary'>Volver</button>";
    		$('#resultado').html(formulario)
		})
		.fail(function() {
    		// an error occurred
		});
	});
	
	$('#resultado').on("click","#btnModificar",function() {
		alert($('#resultado #nombre').val());
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
	}//function buscarAlumnos


	function buscarAlumnoPorId (idAlumno) {
		var dato = { 'id':idAlumno };
		return	$.ajax({
					url: 'php/buscarAlumnoPorId.php',
					type: 'post',
					dataType: 'json',
					data: dato,
					success:function (data) {
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

