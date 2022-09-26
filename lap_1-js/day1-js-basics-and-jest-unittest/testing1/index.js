function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'error'
    }
    return a + b;
}

function hightestNumber(arr) {
    return Math.max(...arr)
}

function multiply(a, b) {
    return a * b

}

function pwr(a, b) {
    return a ** b
}

function capitalize(str) {
    return str.toUpperCase()
}


module.exports = { sum, hightestNumber, multiply, pwr, capitalize };

console.log(sum(1, 2))
