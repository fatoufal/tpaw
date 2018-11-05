function validation() {
    var nomValue = document.querySelector("#nom").value.length;
    var prenomValue = document.querySelector("#prenom").value.length;
    var mailValue = document.querySelector("#mail").value.length;
    var datedenaissanceValue = document.querySelector("#datedenaissance").value.length;
    var AddresseValue = document.querySelector("#Addresse").value.length;
    if (nomValue == 0) {
        document.querySelector("#error").textContent = "le nom est obligatoire";
        document.querySelector("#nom + .errorItem").textContent = " ";

    }
    else if (nomValue < 5) {
        document.querySelector("#error").textContent = "le nombre de champs doit étre supérieur à 5";
    }

    if (prenomValue == 0) {
        document.querySelector("#error").textContent = "le prenom est obligatoire";
        document.querySelector("#prenom + .errorItem").textContent = " ";

    }
    else if (prenomValue < 5) {
        document.querySelector("#error").textContent = "le nombre de champs doit étre supérieur à 5";
    }

    if (mailValue == 0) {
        document.querySelector("#error").textContent = "le mail est obligatoire";
        document.querySelector("#mail + .errorItem").textContent = " ";
    }

    else if (mailValue < 5) {
        document.querySelector("#error").textContent = "le nombre de champs doit étre supérieur à 5";

    }

if (datedenaissanceValue == 0) {
    document.querySelector("#error").textContent = "le prenom est obligatoire";
    document.querySelector("#datedenaissance + .errorItem").textContent = " ";

}
else if (datedenaissanceValue < 5) {
    document.querySelector("#error").textContent = "le nombre de champs doit étre supérieur à 5";
}
if (AddresseValue == 0) {
    document.querySelector("#error").textContent = "l'adresse est obligatoire";
    document.querySelector("#Adresse + .errorItem").textContent = " ";

}
else if (AddresseValue < 5) {
    document.querySelector("#error").textContent = "le nombre de champs doit étre supérieur à 5";
}


else {
    document.querySelector("#error").textContent = "bienvenue   " + document.getElementById("nom").value;
}

}

