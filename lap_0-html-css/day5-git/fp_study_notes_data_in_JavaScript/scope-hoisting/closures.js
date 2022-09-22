function matilda(multiplier){
    return (x => x * multiplier)
} // What data type does the matilda function return?

const timesByEight = matilda(8) // What value has timesByEight been assigned here?
const eightByThree = timesByEight(3) // What does this return?

const timesByTen = matilda(10) // What value has timesByTen been assigned here?
const tenByThree = timesByTen(3) // What does this return?

// // Pause with this debugger and investigate the Sources > Scope panel
// debugger;

// What do each of these functions look like? How do they produce different results?
const logFunctions = () => console.log(`tBE: ${timesByEight}\ntBT: ${timesByTen}`);