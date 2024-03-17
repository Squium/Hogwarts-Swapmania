// Menu Déroulant

// Récupération des éléments
const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

// Ajout de la classe "menu-mobile"
menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})







// Condition Formulaire

// Get element de tous les éléments
const form = document.getElementById("form");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const objet = document.getElementById("objet");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");
const envoi = document.getElementById("envoi");

// Event lorsque click sur submit => Fonction Event

form.addEventListener("submit", function (event) {

    // Arret du chargement de la page
    event.preventDefault();

    //  Vérification des champs non valide
    // Prénom minimum 2 caractères
    if(prenom.value.length < 2) {
        prenom.style.color = "red";    
        error1.innerHTML = "<div> Minimum 2 Caractères requis </div>";
    } else {
        prenom.style.color = "green"; 
        error1.innerHTML = "";
    }

    // Nom minimum 2 caractères
    if(nom.value.length < 2) {
        nom.style.color = "red";    
        error2.innerHTML = "<div> Minimum 2 Caractères requis </div>";
    } else {
        nom.style.color = "green"; 
        error2.innerHTML = "";
    }

    // Email minimum 8 caractères
    if(email.value.length < 8) {
        email.style.color = "red";    
        error3.innerHTML = "<div> Minimum 8 Caractères requis </div>";
    } else {
        email.style.color = "green"; 
        error3.innerHTML = "";
    }

    // Téléphone exactement 10 caractères
    if(telephone.value.length != 10) {
        telephone.style.color = "red";    
        error4.innerHTML = "<div> Veuillez entrez 10 caractères </div>";
    } else {
        telephone.style.color = "green"; 
        error4.innerHTML = "";
    }

    // Motif différent du choix par défaut
    if(objet.value == "Motif") {
        objet.style.color = "red";    
        error5.innerHTML = "<div> Veuillez choisir un objet </div>";
    } else {
        objet.style.backgroundColor = "#b6ff11"; 
        objet.style.color = "black"
        error5.innerHTML = "";
    }

    // Condition de validation du formulaire

    if (
        // Vérification si tous les champs sont bien valides (on vérifie par la couleur)
        prenom.style.color == "green" &&
        nom.style.color == "green" &&
        email.style.color == "green" &&
        telephone.style.color == "green" &&
        objet.style.backgroundColor == "rgb(182, 255, 17)" 
    ) {
        // Si oui, alors :
        
        // On affiche le message "Votre message a bien été envoyé"
        envoi.innerHTML = "Votre message a bien été envoyé";

        // On lance une fonction de timeOut
        setTimeout(function() {
            
            // On réinitialise le formulaire
            document.getElementById("form").reset();

            // On remets toutes les polices en noir
            prenom.style.color = "black";
            nom.style.color = "black";
            email.style.color = "black";
            telephone.style.color = "black";

            // On remets le background du select en blanc
            objet.style.backgroundColor = "white";

            //On enlève le message d'envoyé
            envoi.innerHTML = "";


            //Temps final du timeOut = 2000ms = 2 secondes
        }, 2000);
    }
    
    // Sinon rien ne se passes

});