<?php
$pdo = new PDO('mysql:host=localhost;dbname=personas','root','nati666000');
//INSERT INTO personas(fecha) VALUES(  STR_TO_DATE( '01-09-1986', '%d-%m-%Y' ) );

$nombre = $_POST['nombre'];

//$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

$stmt = $pdo->query("SELECT id,nombre,imagen FROM personajes where nombre LIKE '$nombre%'");
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
?>