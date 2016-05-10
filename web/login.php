<?php
require_once ("conexion.php");
$login = $_REQUEST['name'];
$contrasena = md5($_REQUEST['pass']);

//$con = mysqli_connect('mysql.hostinger.es', 'u415756471_alex', '9603496034', 'u415756471_bbdd') or die(mysqli_error());

$qry = "SELECT * FROM user WHERE user_name='$login' AND user_pass='$contrasena'";

$res = mysqli_query($conn,$qry);

if(mysqli_num_rows($res)==1) {
	echo 'true';
	}
else {
	echo 'false';
}
?>
