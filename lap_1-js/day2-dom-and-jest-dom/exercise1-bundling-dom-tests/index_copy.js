const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const body = document.querySelector('body')
const section = document.querySelector('section')
const home = document.querySelectorAll('li')[0]
const more = document.querySelectorAll('li')[1]
const about = document.querySelectorAll('li')[2]
const p1 = document.querySelectorAll('p')[0]
const p2 = document.querySelectorAll('p')[1]
const p3 = document.querySelectorAll('p')[2]

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

home.addEventListener('click', () => {
    p1.style.fontSize = '1.5em';
    p1.style.fontWeight = 'bold';
    resetUnclicked(p2, p3);
})
more.addEventListener('click', () => {
    p2.style.fontSize = '1.5em';
    p2.style.fontWeight = 'bold';
    resetUnclicked(p1, p3);
})
about.addEventListener('click', () => {
    p3.style.fontSize = '1.5em';
    p3.style.fontWeight = 'bold';
    resetUnclicked(p1, p2)
})

function resetUnclicked(first, second) {
    first.style.fontSize = '1em';
    second.style.fontSize = '1em';
    first.style.fontWeight = 'normal';
    second.style.fontWeight = 'normal';
}
