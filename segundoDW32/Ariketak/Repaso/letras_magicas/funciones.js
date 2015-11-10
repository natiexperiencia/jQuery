function cambia (letra,source) {
	var cachos = source.split("/");
	var src = cachos.pop();
	if (src != "Vacio.gif") {
		document.getElementById(letra).src = "../../../resources/Letras/Vacio.gif";
	}else if(letra == "i2"){
		document.getElementById("i2").src = "../../../resources/Letras/I.gif";
	}else{
		document.getElementById(letra).src = "../../../resources/Letras/"+letra.toUpperCase()+".gif";
	}
}