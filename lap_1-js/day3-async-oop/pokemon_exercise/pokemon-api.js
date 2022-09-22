// const fetchAsync = (index) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${index} `)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))
// }

// fetchAsync(1)


const fetchAsync = async (index) => {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${index} `);
    const pokemonData = await rawData.json()
    let pokemonName = pokemonData.name
    let pokeImageFront = pokemonData.sprites.front_default
    let pokeImageBack = pokemonData.sprites.back_default
    let pokeMovesArr = pokemonData.moves

    let h1 = document.getElementById("pokemonName")
    h1.textContent = pokemonName

    let img1 = document.getElementById('pokeImageFront')
    let img2 = document.getElementById('pokeImageBack')
    img1.src = pokeImageFront
    img2.src = pokeImageBack

    let ul = document.getElementsByTagName('ul')[0]
    ul.textContent = '' // reset each time
    for (let m of pokeMovesArr.slice(0, 5)) {
        let liElement = document.createElement('li')
        liElement.textContent = m.move.name
        ul.appendChild(liElement)
    }
}

let index = 1
fetchAsync(index).catch(err => console.log(err.message))


const button = document.getElementById('nextBtn')
button.addEventListener('click', () => {
    index++;
    fetchAsync(index).catch(err => console.log(err.message))
})

