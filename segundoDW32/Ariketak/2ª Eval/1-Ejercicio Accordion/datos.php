<?php
	$pdo = new PDO('mysql:host=localhost;dbname=datosAlumnos','root','zubiri');
	$statement = $pdo->query('SELECT * FROM alumnos');
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>