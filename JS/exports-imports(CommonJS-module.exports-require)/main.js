// CommonJS, every file is module (by default)
// Unlike ES6 import/export package.json file must NOT contain "type": "module"

const personName = require("./name")
// personName is string not object
const calculateAge = require("./arrowFunc")
const kurec = require("./funcDeclaration")

console.log("Imported personName:", personName)

// calculateAge function returns currentYear - yearOfBirth
console.log("calculateAge is now an arrow function")
console.log("Age:", calculateAge(1966))

console.log("calculateAge is now a function declaration")
console.log("Age:", kurec(1990))



