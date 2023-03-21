const calculateAge = (yearOfBirth) => {
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear - yearOfBirth
}

module.exports = calculateAge


