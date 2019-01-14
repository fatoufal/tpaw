$(document).ready(function () {

    var xTriggered = 0;
$( '#nom' ).keyup(function( event ) {
 xTriggered++;
 $("#cn").html($( '#nom' ).val().length +  " caract");
 //$.print( msg, "html" );
 
}).keydown(function( event ) {
 if ( event.which == 0) {
   event.preventDefault();
 }
   
});


var yTriggered = 0;
$( '#prenom' ).keyup(function( event ) {
 yTriggered++;
 $("#cp").html($( '#prenom' ).val().length +  " caract");
 //$.print( msg, "html" );
 
}).keydown(function( event ) {
 if ( event.which == 0) {
   event.preventDefault();
 }

});

 // $( function() {
  //  $( "#datepicker" ).datepicker();  //pour la mise en place du calendrier
  //} );
    $("#valider").click(function (event) {
          event.preventDefault();
            if ($("#nom").val().length < 3 || $("#prenom").val().length < 3 || $("#date").val().length < 3 || $("#adress").val().length < 3 || $("#mail").val().length < 3)
        {
                $(this).css("border-color","red");
                $("h5").html("message modal");

                $("p").html("tous les champs doivent être supérieurs à 5 caractères");
                isError = true;
                $('#myModal').modal("show");
                
           
        }

        else
        {
             //contactStore.add("qsdqsd","qsdqsd","dsqfsdf","dsfsdfsdf","dsfsdfsdf");
            contactStore.add($("#nom").val(),$("#prenom").val(),$("#adress").val(),$("#date").val(),$("#mail").val());
            contactList = contactStore.getList();
            $("tbody").html('');
            for(var index in contactList){
                $("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
             }
        }
            
             
              
            
        });
        

    





     $("#gps").click(function (event) {
        event.preventDefault();
        console.log("click");
        getLocation()
       
    });



});