// Menu Déroulant

// Récupération des éléments
const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

// Ajout de la classe "menu-mobile"
menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})


function fetchCharacters() {
    return fetch("https://hp-api.lainocs.fr/characters")
    .then((response) => response.json())
}

async function  displayCharacters() {
    const data = await fetchCharacters()
    data.forEach(character => {
        document.querySelector("#characters").innerHTML += `
            <div class="card-hover">
                <div class="card card-${character.slug}">
                    <a href="ZoomCarte.html?slug=${character.slug}" class="card-front">
                        <h2 class="Name">
                            ${character.name}
                        </h2>
                        <img src="${character.image}" alt="${character.name}" class="imgperso" />
                    </a>
                    <a href="ZoomCarte.html?slug=${character.slug}" class="card-back">
                        <img src="Images/Logo${character.house}.png" alt="${character.house}"/>
                        <h2 class="Name">
                            ${character.name}
                        </h2>
                        <h2 class="HouseBack">
                            ${character.house}
                        </h2>
                    </a>
                </div>
            </div>
            
        `

        if (character.house == "Gryffindor") {
            document.querySelector('.card-'  + character.slug).classList.add("Gryffindor");
        } else if (character.house == "Slytherin") {
            document.querySelector('.card-'  + character.slug).classList.add("Slytherin");
        } else if (character.house == "Hufflepuff") {
            document.querySelector('.card-'  + character.slug).classList.add("Hufflepuff");
        } else if (character.house == "Ravenclaw") {
            document.querySelector('.card-'  + character.slug).classList.add("Ravenclaw");
        } else if (character.house == "") {
            document.querySelector('.card-'  + character.slug).classList.add("SansMaison");
        }

        
    })
    
}



displayCharacters()