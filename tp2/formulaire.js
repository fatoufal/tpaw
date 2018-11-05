function validation () {
    var nomValue=document.querySelector("#nom").value.length ;
    var nomValue=document.querySelector("#nom").value.length ;
    var nomValue=document.querySelector("#nom").value.length ;
    var nomValue=document.querySelector("#nom").value.length ;
    var nomValue=document.querySelector("#nom").value.length ;
    if(nomValue== 0){
        document.querySelector("#error").textContent="le nom est obligatoire";
        document.querySelector("#nom + .errorItem").textContent=" ";

    }
    else if(nomValue<5){
        document.querySelector("#error").textContent="le nombre de champs doit étre supérieur à 5";
    }

    else if(nomValue== 0){
        document.querySelector("#error").textContent="le nom est obligatoire";
        document.querySelector("#nom + .errorItem").textContent=" ";

    }
    else if(nomValue<5){
        document.querySelector("#error").textContent="le nombre de champs doit étre supérieur à 5";
    }

    
    else {
        document.querySelector("#error").textContent="bienvenue   "  +  document.getElementById("nom").value;
    }
}