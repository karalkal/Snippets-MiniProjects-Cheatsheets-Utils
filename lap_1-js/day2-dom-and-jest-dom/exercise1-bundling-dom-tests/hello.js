function hello() {
    console.log('this module can be accessed thanks to watchify/bundling\nin package.json    "dev": "watchify ./index.js -o bundle.js"\nin index.html now change script src="bundle.js"')
}

module.exports = hello
