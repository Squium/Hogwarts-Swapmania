// Menu Déroulant

// Récupération des éléments
const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

// Ajout de la classe "menu-mobile"
menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})

