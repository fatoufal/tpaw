    $(document).ready(function () {

    console.log("DOM ready!");

    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click");

        if ($("#nom").val().length < 5 || $("#nom").val().length > 20 || $("#pre").val().length < 5 || $("#pre").val().length > 20 || $("#add").val().length < 5 || $("#add").val().length > 50 || $("#mail").val().length < 5 || $("#mail").val().length > 30) {
            $(".modal-title").text("Message Modal");
            $(".modal-body").html('Vérifier tous les champs');
            $('#myModal').modal("show");
        }
        else {
    
            contactStore.add($("#nom").val(), $("#pre").val(), $("#date").val(),$("#add").val(), $("#mail").val());
           
    
    
        }
       var contactList=contactStore.getList();
        for(var index in contactList){
            console.log(contactList[index].name);
            console.log(contactList[index].firstname);
            console.log(contactList[index].date);
            console.log(contactList[index].adress);
            console.log(contactList[index].mail);
            document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
            '<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td><tr>';
          }
            
          
       
    });

    
});


