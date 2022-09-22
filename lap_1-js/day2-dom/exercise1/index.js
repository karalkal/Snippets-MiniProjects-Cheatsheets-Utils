const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const body = document.querySelector('body')
const section = document.querySelector('section')
const ul = document.querySelector('ul')

const liNodeList = document.querySelectorAll('li')
const paraHTMLCollection = document.getElementsByTagName('p')

const newPara = document.createElement('p')
newPara.textContent = ''

section.appendChild(newPara)

h1.addEventListener('click', () => {
    h1.style.backgroundColor = 'red'
})

h1.addEventListener('mouseout', () => {
    h1.style.backgroundColor = 'white'
})

h2.addEventListener('mouseover', () => {
    h2.textContent = 'Hello Man'
})

h2.addEventListener('mouseout', () => {
    h2.textContent = 'Title 2'
})

document.addEventListener('keypress', () => {
    // console.log(event.key);
    newPara.textContent += event.key
})

ul.addEventListener('click', () => {
    // console.log(event.target.className)
    let btnClass = event.target.className

    for (let pElement of paraHTMLCollection) {
        if (pElement.className === btnClass) {
            pElement.style.fontSize = '1.5em';
            pElement.style.fontWeight = 'bold';
        } else {
            pElement.style.fontSize = '1em';
            pElement.style.fontWeight = 'normal';
        }
    }
})


