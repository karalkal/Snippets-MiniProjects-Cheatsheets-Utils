(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function hello() {
    console.log('this module can be accessed thanks to watchify/bundling\nin package.json    "dev": "watchify ./index.js -o bundle.js"\nin index.html now change script src="bundle.js"')
}

module.exports = hello

},{}],2:[function(require,module,exports){
const hello = require('./hello')
hello()

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

let h1DisplayOriginaltext = true

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

document.querySelector('.test').addEventListener('click', () => {
    h1DisplayOriginaltext = !h1DisplayOriginaltext
    if (!h1DisplayOriginaltext) h1.textContent = 'You hit me!'
    else h1.textContent = 'Title 1'
}
)



},{"./hello":1}]},{},[2]);
