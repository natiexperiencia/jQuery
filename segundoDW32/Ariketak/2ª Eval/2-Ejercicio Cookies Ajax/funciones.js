$(document).ready(function() {
	
	$.ajax({
		url: 'datos.php',
		type: 'post',
		dataType: 'json',
	})
	succes: function (data) {
		var resp = "<thead><tr><th>Descripción</th><th>Precio</th></tr></thead>";
		for (var i = 0;i<data.length; i++) {
			resp += "<tr><td>";
			
		};
	}
	
});