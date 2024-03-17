// Menu Déroulant

// Récupération des éléments
const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

// Ajout de la classe "menu-mobile"
menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})


function fetchCharacter() {
    let url = window.location.search
    let slug = new URLSearchParams(url).get("slug")
    return fetch("https://hp-api.lainocs.fr/characters/" + slug)
    .then((response) => response.json())
}

async function displayCharacter() {
    const data = await fetchCharacter()
    const birthday = data.birthday.substr(0, 10)
    document.querySelector('#character').innerHTML += `
        <img id="ban" src="images/Ban${data.house}.png" alt="Bannière ${data.house}">
        <h1 class="Name">${data.name}</h1> 

        <div class="column">
            <div class="left">
                <div class="card">
                    <img id="image" src="${data.image}" alt="${data.name}">
                </div>
            </div>
            <div class="right">
                <h2> Name : ${data.name}</h2>
                <h2> House : ${data.house}</h2>
                <h2> Actor : ${data.actor}</h2>
                <h2> Birthday : ${birthday}</h2>
                <h2> Blood Type: ${data.blood}</h2>
                <h2> Eyes Color : ${data.eyes}</h2>
                <h2> Hairs Color : ${data.hairs}</h2>
                <h2> Patronus : ${data.patronus}</h2>
                <h2> Role : ${data.role}</h2>
                <h2> Wand : ${data.wand}</h2>
            </div>
        </div>
        
        
        
        
        


        <a href="/index.html class="btn">back</a>




        <img id="ban" src="images/Ban${data.house}.png" alt="Bannière ${data.house}">
    `
    
    if (data.house == "Gryffindor") {
        document.querySelector('.card').classList.add("Gryffindor");
    } else if (data.house == "Slytherin") {
        document.querySelector('.card').classList.add("Slytherin");
    } else if (data.house == "Hufflepuff") {
        document.querySelector('.card').classList.add("Hufflepuff");
    } else if (data.house == "Ravenclaw") {
        document.querySelector('.card').classList.add("Ravenclaw");
    } else if (data.house == "") {
        document.querySelector('.card').classList.add("SansMaison");
    }

}

displayCharacter()