<?php
$pdo = new PDO('mysql:host=localhost;dbname=datos','root','nati666000');
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
$stmt = $pdo->prepare("INSERT INTO personas(nombre,apellido,edad,dni,email,provincia,fecha,telefono,hora) 
	VALUES ('$nombre','$apellido',$edadInt,'$dni','$email','$provincia',STR_TO_DATE( '$fecha', '%d-%m-%Y' ),'$telefono','$hora'");
if ($stmt->execute()) {
	echo "ok";
}else {
	print_r($dbh->errorInfo());
}
?>