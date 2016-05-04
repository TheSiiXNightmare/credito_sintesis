<?php
	require_once ("conexion.php");

	$contrasena = md5($_GET['pass']);
	$user= $_GET['user'];

	$sql = "INSERT INTO user(user_name, user_pass)VALUES('$user','$contrasena')";
	echo $sql;
	if ($conn->query($sql) === TRUE) {
   		echo "Usuario creado";
	} else {
   		echo "Error al crear usuario";
	}
?>