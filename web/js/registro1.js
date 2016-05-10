$(document).ready(function() {
  $("#registrar2").click(function() {
    username=$("#namereg").val();
    password=$("#passreg").val();
    $.ajax( {
      type: "post",
      url: "registro.php",
      data: "name="+username+"&pass="+password,
      success: function(html2) {
        if(html2=='1') {
          $("#registro-menu").fadeOut(1000, function() {
            $("#login-menu").fadeIn(1000);
          });
          $("#registro-section").fadeOut(1000, function() {
            $("#login-section").fadeIn(1000);
          });
        } else {
          $("#add_err2").css('color', 'green', 'important');
          $("#add_err2").html("<p>Usuario o contrase&#241;a incorrectos.</p>");
        }
      },
      beforeSend:function() {
        $("#add_err2").fadeIn(1000);
      }
    });
    return false;
  });
});	