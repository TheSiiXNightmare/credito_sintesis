<?php
	require_once ("conexion.php");

	$login = mysqli_real_escape_string($conn, $_GET['user']);
	$contrasena = mysqli_real_escape_string($conn, $_GET['pass']);
	$contrasena = md5($contrasena);

	$buscar = "SELECT * FROM user WHERE user_name='$login' AND user_pass='$contrasena'";
	$sql = mysqli_query($conn, $buscar);

	if ($sql) {
		$datos = mysqli_num_rows($sql);
		if ($datos == 1 ) {
			echo '1';
			
		}else {
			echo '0';
		}
	}
?>