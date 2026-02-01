function naviguer(idPage) {
    var pages = document.getElementsByClassName('page');
    
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    document.getElementById(idPage).classList.add('active');
}

function envoyerFeedback() {
    var nom = document.getElementById('nomClient').value;
    var message = document.getElementById('msgClient').value;

    if (nom == "" || message == "") {
        alert("Attention ! Tous les champs doivent être remplis.");
    } else {
        alert("Merci " + nom + " ! Ton avis a été envoyé à CrêpAnas.");
        
        document.getElementById('nomClient').value = "";
        document.getElementById('msgClient').value = "";
    }
}

window.onload = function() {
    console.log("Site CrêpAnas chargé avec succès. Propriétaire: Anas Ammari (24001725)");

};

