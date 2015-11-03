function cambia (letra,source) {
	var cachos = source.split("/");
	var src = cachos.pop();
	if (src != "Vacio.gif") {
		document.getElementById("z").src = "../../../resources/Letras/Vacio.gif"
	};
}