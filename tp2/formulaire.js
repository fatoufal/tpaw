function validation () {
    var nomValue=document.querySelector("#nom").value ;
    if(nomValue== ""){
        document.querySelector("#error").textContent="le nom est obligatoire";
        document.querySelector("#nom + .errorItem").textContent="........";
    }
}