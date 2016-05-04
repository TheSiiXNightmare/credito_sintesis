<?php

	require_once ("conexion.php");

	$login = mysqli_real_escape_string($_GET['user']);
	$contrasena = mysqli_real_escape_string($_GET['pass']);
	$contrasena = md5($contrasena);

	$sql = mysqli_query("SELECT * FROM user WHERE user_name = '$login' AND user_pass = '$contrasena'");

	if ($sql) {
		$datos = mysqli_num_rows($sql);
		if ($datos == 1 ) {
			echo '1';
		}else {
			echo '0';
		}
	}
?>