function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    }
    if (number % 3 === 0) {
        return 'Fizz'
    }
    if (number % 5 === 0) {
        return 'Buzz'
    }
    return number
}

module.exports = { fizzbuzz }

console.log(fizzbuzz(90))
