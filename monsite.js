/**
 * Logique du site CrêpAnas
 * Étudiant : Anas Ammari
 */

// 1. Fonction de navigation entre les pages
function naviguer(idPage) {
    // On récupère toutes les sections avec la classe 'page'
    var pages = document.getElementsByClassName('page');
    
    // On les cache toutes
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    // On affiche uniquement celle cliquée
    document.getElementById(idPage).classList.add('active');
}

// 2. Gestion du Feedback
function envoyerFeedback() {
    var nom = document.getElementById('nomClient').value;
    var message = document.getElementById('msgClient').value;

    if (nom == "" || message == "") {
        alert("Attention ! Tous les champs doivent être remplis.");
    } else {
        // Simulation d'envoi
        alert("Merci " + nom + " ! Ton avis a été envoyé à CrêpAnas.");
        
        // On vide les champs
        document.getElementById('nomClient').value = "";
        document.getElementById('msgClient').value = "";
    }
}

// 3. Petite touche pro : Message console au chargement
window.onload = function() {
    console.log("Site CrêpAnas chargé avec succès. Propriétaire: Anas Ammari (24001725)");

};
