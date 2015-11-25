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

				//Si tiene clase de accordion
				if ($('#resp').hasClass('ui-accordion')) {
					//destruye el accordion
                	$('#resp').accordion('destroy');
                	//Vuelve a crear el accordion
                	$('#resp').accordion({
						collapsible:true,
						active:false
					});
				}else{
					//si no, crea el accordion
					$('#resp').accordion({
						collapsible:true,
						active:false
					});
				}//if
			}//success
		});//ajax
	});//submit
});