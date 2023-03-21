
// IMPORTANT: In order to use ES6 export/import include in package.json :
// "type": "module"

import personName from "./default-export.js";
import differentNameVar from "./default-export.js";

import { calculateAge } from "./named-export.js";
import { calculateAge as newFuncName } from "./named-export.js";       //alias

import { favColour, favMusic as bollocks } from "./named-export.js";

console.log("Default exports")
console.log("Imported personName:", personName)
console.log("If using default export name of variable can be changed, e.g. personName becomes differentNameVar:", differentNameVar)
console.log("\nNamed Exports")

// calculateAge function returns currentYear - yearOfBirth
console.log("Favourite colour:", favColour)
console.log("Age:", calculateAge(2021))
console.log("Or we can use alias, e.g. calculateAge as newFuncName, favMusic as bollocks")
console.log("Age:", newFuncName(1988))
console.log("Favourite music:", bollocks)
