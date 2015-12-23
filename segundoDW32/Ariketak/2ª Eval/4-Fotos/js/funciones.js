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

	//Crear formulario para modificar o borrar alumno al clicar en la celda
	$('#resultado').on("click",".celda",function () {
		var datos = $(this).contents();
		buscarAlumnoPorId(datos[0].id)
		.done(function(result) {
    		var formulario = "<form class='form-group' id='formUpdate'>Id: <input type='text' id='id' name='id' class='form-control' value='"+result.id+"' disabled='disabled'>";
    		formulario += "Nombre: <input type='text' id='nombre' name='nombre' class='form-control' value='"+result.nombre+"'>";
    		formulario += "Imagen: <input type='text' id='imagen' name='imagen' class='form-control' value='"+result.imagen+"'>";
    		formulario += "<br/><input type='submit' id='btnModificar' class='btn btn-warning' value='Modificar'>";
    		formulario += "&nbsp;<button id='btnBorrar' class='btn btn-danger'>Borrar</button>";
    		formulario += "&nbsp;<button id='btnVolver' class='btn btn-primary'>Volver</button>";
    		formulario += "</form>";
    		$('#resultado').html(formulario);
		})
		.fail(function() {
    		// an error occurred
		});
	});//Formulario modificar y borrar
	
	//Al clicar en borrar el alumno
	$('#resultado').on("click","#btnBorrar",function() {
		if (confirm("Estas seguro de borrar al alumno "+$('#resultado #nombre').val())+"?") {
			$.ajax({
				url: 'php/borrarAlumno.php',
				type: 'post',
				dataType: 'html',
				data: {'id':($('#resultado #id').val())},
				success:function(data){
					if (data == "ok") {
						alert("Alumno borrado correctamente");
					}else{
						alert("Algo no ha ido bien");
					}//if else
				}//success
			})//ajax
			.done(function() {
				console.log("success borrar");
			})//done
			.fail(function() {
				console.log("error borrar");
			})//fail
		}//if confirm
	});//click borrar formulario alumno

	//Al clicar en modificar el Alumno
	$('#resultado').on("click","#btnModificar",function() {
	    if(confirm("Estas seguro de modificar el alumno??")){
	    	var datos = {'id':$('#resultado #id').val(), 'nombre':$('#resultado #nombre').val(), 'imagen':$('#resultado #imagen').val()};
	    	console.log(datos);
	    	$.ajax({
	    		url: 'php/updateAlumno.php',
	    		type: 'post',
	    		dataType: 'html',
	    		data: datos,
	    		success:function(data){
					if (data == "ok") {
						alert("Alumno borrado correctamente");
					}else{
						alert("Algo no ha ido bien");
					}//if else
				}//success
	    	})//ajax
	    	.done(function() {
				console.log("success modificar");
			})//done
			.fail(function() {
				console.log("error modificar");
			})//fail
	    }
	});//click modificar formulario alumno
	
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

