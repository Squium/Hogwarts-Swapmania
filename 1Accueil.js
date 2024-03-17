// Menu Déroulant

// Récupération des éléments
const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

// Ajout de la classe "menu-mobile"
menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})





// Fonction flêche Previous

function previous() {

    //Récupération de la taille du diapo
    const widthSlider = document.querySelector(".diapo").offsetWidth;
    const sliderContent = document.querySelector(".slider_content");

    //Slider vers la gauche
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft
    const itemsSlider = sliderContent.querySelectorAll(".slider_content_items");

    //Condition de si on est au bout du diapo, on va à la fin
    if(scrollLeft == 0) {
        sliderContent.scrollLeft = widthSlider * (itemsSlider.length - 1);
    }

}

// Fonction flêche Next

function next() {

    //Récupération de la taille du diapo
    const widthSlider = document.querySelector(".diapo").offsetWidth;
    const sliderContent = document.querySelector(".slider_content");

    //Slider vers la droite
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft
    const itemsSlider = sliderContent.querySelectorAll(".slider_content_items");

    //Condition de si on est au bout du diapo, on revient au début
    if(scrollLeft == widthSlider * (itemsSlider.length - 1)) {
        sliderContent.scrollLeft = 0;
    }

}
