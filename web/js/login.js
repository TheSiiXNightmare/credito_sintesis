$(document).ready(function() {

    $("#login").click(function() {
        username = $("#namelog").val();
        password = $("#passlog").val();
        $.ajax({
            type: "post",
            url: "loginweb.php",
            data: "name=" + username + "&pass=" + password,
            success: function(html) {

                if (html == '1') {
                      
                    $("#login-menu").fadeOut(500, function() {
                        $("#rank-menu").fadeIn(1000);
                        $("#logout-menu").fadeIn(1000);
                    });
                    $("#login-section").fadeOut(500, function() {
                        $("#registro-section").fadeIn(1000);
                    });
                } else {
                    $("#add_err").css('color', 'red', 'important');
                    $("#add_err").html("<p>Usuario o contrase&#241;a incorrectos.</p>");
                }
            },
            beforeSend: function() {
                $("#add_err").fadeIn(1000);
            }
        });
        return false;
    });

    $("#register").click(function() {

        $("#login-menu").fadeOut(500, function() {
            $("#registro-menu").fadeIn(1000);
        });
        $("#login-section").fadeOut(500, function() {
            $("#registro-section").fadeIn(1000);
            $("#namelog").val('');
            $("#passlog").val('');
        });
    });

    $("#registrar").click(function() {
        userreg = $("#namereg").val();
        passreg = $("#passreg").val();
        $.ajax({
            type: "post",
            url: "registro.php",
            data: "name=" + userreg + "&pass=" + passreg,
            success: function(html) {
                
                if (html == 1) {
                    
                    $("#registro-menu").fadeOut(500, function() {
                        $("#login-menu").fadeIn(1000);
                    });
                    $("#registro-section").fadeOut(500, function() {
                        $("#login-section").fadeIn(1000);
                        $("#add_err").fadeIn(1000);
                        $("#namelog").val('');
                        $("#passlog").val('');
                    });
                    $("#add_err").css('color', 'green', 'important');
                    $("#add_err").html("<p>Usuario creado correctamente.</p>");
                  
                } else if (html == 0) {
                    $("#add_err2").css('color', 'red', 'important');
                    $("#add_err2").html("<p>El nombre de usuario no esta disponible.</p>", function() {
                          $("add_err2").fadeIn(1000);
                    });
                }
            },
            beforeSend: function() {
               
               
            }
        });
        return false;
    });

    $("#volver_reg").click(function() {
        $("#registro-menu").fadeOut(500, function() {
            $("#login-menu").fadeIn(1000);
        });
        $("#registro-section").fadeOut(500, function() {
            $("#login-section").fadeIn(1000);
            $("#namereg").val('');
            $("#passreg").val('');
        });
        return false;
    });

    $("#logout").click(function() {
        $("#registro-menu").fadeOut(500, function() {
            $("#login-menu").fadeIn(1000);
        });
        $("#registro-section").fadeOut(500, function() {
            $("#login-section").fadeIn(1000);
            $("#namereg").val('');
            $("#passreg").val('');
        });
        $("#rank-menu").fadeOut(500);
        $("#logout-menu").fadeOut(500);
        return false;
    });
});	