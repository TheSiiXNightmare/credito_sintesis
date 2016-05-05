<?php
	require_once ("conexion.php");

	$contrasena = mysql_real_escape_string($_GET['pass']);
	$contrasena = md5($contrasena);
	$user = mysql_real_escape_string($_GET['user']);

	$sql = "INSERT INTO user(user_name, user_pass)VALUES('$user','$contrasena')";
	if ($conn->query($sql) === TRUE) {
   		echo "1";
	} else {
   		echo "0";
	}
?>