/*
function ageCheck(people) {
    // filter people with age < 18, then check length of array 
    return people.filter(p => p.age < 18).length > 0;
};

function over18s(people) {
    return people.filter(p => p.age >= 18);
};

function crecheRoster(people) {
    return people
        .filter(p => p.age <= 12)
        .map(kid => kid.name);
};

function cumulativeAge(people) {
    return people
        .map(person => person.age)
        .reduce((previousValue, currentValue) => previousValue + currentValue,
            0);
}
*/


function ageCheck(people) {
    for (let person of people) {
        if (person.age < 18) {
            return true;
        }
    }
    return false;
};

function over18s(people) {
    let adults = []

    for (let person of people) {
        if (person.age >= 18) {
            adults.push(person);
        }
    }
    return adults;
}

function crecheRoster(people) {
    let kids = []

    for (let person of people) {
        if (person.age <= 12) {
            kids.push(person.name);
        }
    }
    return kids;
};

function cumulativeAge(people) {
    let totalAge = 0;
    for (let person of people) {
        totalAge += person.age
    }
    return totalAge
}


let people = [
    { name: "Elowen", age: 8 },
    { name: "Artemis", age: 12 },
    { name: "Trifun", age: 16 },
    { name: "Beti", age: 33 },
    { name: "Aki", age: 30 }
];


module.exports = { ageCheck, over18s, crecheRoster, cumulativeAge }
