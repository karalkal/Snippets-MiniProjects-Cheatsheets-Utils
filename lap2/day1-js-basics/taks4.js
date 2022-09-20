/*
    Write a function that takes three inputs. One should be a country, one should be the length of flight to get there and one the final should be the place where someone lives. The function should return a sentence that describes the person's journey.
    Adapt your function to assume that someone always starts their journey in London.

*/

const describeJourney = (destination, duration, origin = 'London') => `Cool bruv! It looks like you will leave ${origin} and in ${duration} hours you will find yourself in ${destination}.`


console.log(describeJourney("Rome", 2.5))
console.log(describeJourney("Paris", 2.5, 'NY'))
