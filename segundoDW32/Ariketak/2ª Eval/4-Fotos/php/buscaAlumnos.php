<?php
//$pdo = new PDO('mysql:host=localhost;dbname=personas','root','zubiri');
//INSERT INTO personas(fecha) VALUES(  STR_TO_DATE( '01-09-1986', '%d-%m-%Y' ) );
$pdo = new PDO('mysql:host=127.0.0.1;dbname=personas','root','');

$nombre = $_POST['nombre'];

//$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

$stmt = $pdo->query("SELECT id,nombre,imagen FROM personajes where nombre LIKE '$nombre%'");
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
?>