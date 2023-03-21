export function calculateAge(yearOfBirth) {
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear - yearOfBirth
}

const favColour = "Blue"
const favMusic = "Black metal"
export {favColour, favMusic}



