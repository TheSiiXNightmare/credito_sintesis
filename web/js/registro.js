$(document).ready(function() {
$("#registrar").click(function() {
    username=$("#namereg").val();
    password=$("#passreg").val();
    $.ajax( {
      type: "post",
      url: "registro.php",
      data: "name="+username+"&pass="+password,
      success: function(html) {
        if(html == '1') {
          $("#registro-menu").fadeOut(500, function() {
            $("#login-menu").fadeIn(1000);
          });
          $("#registro-section").fadeOut(500, function() {
            $("#login-section").fadeIn(1000);
          });
          $("#add_err2").css('color', 'green', 'important');
          $("#add_err2").html("<p>Usuario creado correctamente.</p>");
        } else {
          $("#add_err2").css('color', 'red', 'important');
          $("#add_err2").html("<p>El nombre de usuario no esta disponible.</p>");
        }
      },
      beforeSend:function() {
        $("#add_err2").fadeIn(1000);
      }
    });
    return false;
  });
});