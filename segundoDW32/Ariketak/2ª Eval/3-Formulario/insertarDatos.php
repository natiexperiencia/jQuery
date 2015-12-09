<?php
$pdo = new PDO('mysql:host=localhost;dbname=datos','root','zubiri');
//INSERT INTO personas(fecha) VALUES(  STR_TO_DATE( '01-09-1986', '%d-%m-%Y' ) );

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$edad = $_POST['edad'];
$edadInt = intval($edad);
$dni = $_POST['dni'];
$email = $_POST['email'];
$provincia = $_POST['provincias'];
$fecha = $_POST['fecha'];
$telefono = $_POST['telefono'];
$hora = $_POST['hora'];
//echo $nombre."<br/>".$apellido."<br/>".$edad."<br/>".$edadInt."<br/>".$dni."<br/>".$email."<br/>".$provincia."<br/>".$fecha."<br/>".$telefono."<br/>".$hora;
/*$stmt = $pdo->prepare("INSERT INTO personas(nombre,apellido,edad,dni,email,provincia,fecha,telefono,hora) 
	VALUES ('$nombre','$apellido',$edadInt,'$dni','$email','$provincia','$fecha','$telefono','$hora'");
if ($stmt->execute()) {
	echo "ok";
}else {
	print_r($pdo->errorInfo());
}*/
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
if (($stmt = $pdo->prepare("INSERT INTO personas(nombre,apellido,edad,dni,email,provincia,fecha,telefono,hora) 
	VALUES ('$nombre','$apellido',$edadInt,'$dni','$email','$provincia','$fecha','$telefono','$hora')")) === false) {
    print_r($pdo->errorInfo());
}
if ($stmt->execute() === false) {
    print_r($stmt->errorInfo());
}else{
	echo "ok";
}
?>