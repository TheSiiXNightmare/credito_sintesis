<?php
	require_once ("conexion.php");

	$user = $_GET['user'];
	$tiempo = $_GET['tiempo'];


	$sql = "INSERT INTO partida(partida_user_nik, partida_score)VALUES('$user','$tiempo')";
	echo $sql;
	if ($conn->query($sql) === TRUE) {
   		echo "Puntos subidos";
	} else {
   		echo "Error al subir puntos";
	}
?>