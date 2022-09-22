const funcs = require("../main");

let humans = [
    { name: "Elowen", age: 8 },
    { name: "Artemis", age: 12 },
    { name: "Trifun", age: 16 },
    { name: "Beti", age: 33 },
    { name: "Aki", age: 30 }
];

describe('ageCheck', function(){
    let ageCheck = funcs.ageCheck;

    it('checks to see if any people are under 18', () => {
        expect(ageCheck(humans)).toEqual(true);
    })
})

describe('over18s', function() {
    let over18s = funcs.over18s;

    it('returns an array', () => {
        expect(over18s(humans)).toBeInstanceOf(Array);
    });

    it('returns an array that includes the people who are over 18', () => {
        let result = over18s(humans);
        expect(result).toHaveLength(2);
        expect(result[1].name).toEqual("Aki");
    });
});

describe('crecheRoster', function() {
    let crecheRoster = funcs.crecheRoster;
    it('returns an array', () => {
        expect(crecheRoster(humans)).toBeInstanceOf(Array);
    });

    it('returns an array that includes the names of the people who are 12 or under', () => {
        expect(crecheRoster(humans)).toHaveLength(2)
        expect(crecheRoster(humans)[0]).toEqual("Elowen");
    });
});

describe('cumulativeAge', function() {
    let cumulativeAge = funcs.cumulativeAge;

    it('returns a number', () => {
        expect(cumulativeAge(humans)).toEqual(expect.any(Number));
    });

    it('returns the combined age of all the humans', () => {
        expect(cumulativeAge(humans)).toEqual(99);
    });
});
