function mostrarHora () {
	var fecha = new Date();
	horas = fecha.getHours();
	minutos= fecha.getMinutes();
	segundos=fecha.getSeconds();
	if (minutos < 10) {
		minutos = "0"+minutos;
	};
	if (segundos < 10) {
		segundos = "0"+segundos;
	};
	hora = horas+":"+minutos+":"+segundos;

	document.getElementById('reloj').innerHTML=hora;
}

setInterval(function(){ mostrarHora(); }, 1000);
