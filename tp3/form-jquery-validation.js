$(document).ready(function () {

    console.log("DOM ready!");

    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click");

        if ($("#nom").val().length < 5 || $("#nom").val().length > 20 || $("#pre").val().length < 5 || $("#pre").val().length > 20 || $("#add").val().length < 5 || $("#add").val().length > 50 || $("#mail").val().length < 5 || $("#mail").val().length > 30) {
            $(".modal-title").text("Message Modal");
            $(".modal-body").html('Vérifier tous les champs');
        }
        else {
    
            $(".modal-title").text(" Bienvenue "  +  $("#nom").val());
            $(".modal-body").html('<p> <strong> Vous etes nés le </strong> </p>' + $("#date").val() + '<p><strong> et vous habitez </strong>  </p>'  + '<br>'+ '<img src="lieu.png" width=50%/>');
    
    
    
        }
    
        $('#myModal').modal("show");
    });

    
});


