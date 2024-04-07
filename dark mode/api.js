function fetchCharacters(characters) {
    return fetch("https://hp-api.lainocs.fr/characters/" + characters)
    .then((response) => response.json())
}

async function displayCharacters(characters){
    const data = await fetchCharacters(characters)
    document.getElementById("characters").innerHTML += `
    <h1>${data.name}</h1>
    <img src="${data.image}" alt="${data.name}" /> `
}

displayCharacters("albus-dumbledore")
displayCharacters("harry-potter")
displayCharacters("cho-chang")