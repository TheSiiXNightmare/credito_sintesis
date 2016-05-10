$(document).ready(function() {
  $("#login").click(function() {
    username=$("#namelog").val();
    password=$("#passlog").val();
    $.ajax( {
      type: "post",
      url: "loginweb.php",
      data: "name="+username+"&pass="+password,
      success: function(html) {
        if(html=='1') {
          $("#login-menu").fadeOut(500, function() {
            $("#rank-menu").fadeIn(1000);
          });
          $("#login-section").fadeOut(500, function() {
            $("#registro-section").fadeIn(1000);
          });
        } else {
          $("#add_err").css('color', 'red', 'important');
          $("#add_err").html("<p>Usuario o contrase&#241;a incorrectos.</p>");
        }
      },
      beforeSend:function() {
        $("#add_err").fadeIn(1000);
      }
    });
    return false;
  });
  $("#register").click(function() {
    username=$("#name").val();
    password=$("#pass").val();
    $.ajax( {
      beforeSend:function() {
         $("#login-menu").fadeOut(500, function() {
            $("#registro-menu").fadeIn(1000);
          });
        $("#login-section").fadeOut(500, function() {
          $("#registro-section").fadeIn(1000);
        });
      }
    });
    return false;
  });
});