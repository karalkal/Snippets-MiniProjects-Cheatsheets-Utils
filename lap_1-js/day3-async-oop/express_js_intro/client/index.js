const button = document.getElementById('nextBtn')
let index = 1

fetchAsync() // initial call

button.addEventListener('click', fetchAsync)

async function fetchAsync() {
    checkIndex()

    const rawData = await fetch(`http://localhost:3000/pokemon/${index}`);
    const pokemonData = await rawData.json()

    let pokemonName = pokemonData.name
    let pokeImageFront = pokemonData.frontImg
    let pokeMovesArr = pokemonData.moves

    let h1 = document.getElementById("pokemonName")
    h1.textContent = pokemonName
    let img1 = document.getElementById('pokeImageFront')
    img1.src = pokeImageFront
    let ul = document.getElementsByTagName('ul')[0]
    ul.innerHTML = ''
    for (let move of pokeMovesArr) {
        let liElement = document.createElement('li')
        liElement.textContent = move
        ul.appendChild(liElement)
    }
}

async function checkIndex() {
    const len = await fetch(`http://localhost:3000/pokemon/`)
        .then(res => res.json())
        .then(data => data.length)

    if (index > len - 1) {
        index = 1
    } else {
        index++
    }
}
