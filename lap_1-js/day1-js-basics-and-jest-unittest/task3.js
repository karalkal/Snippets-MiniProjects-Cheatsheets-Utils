/*
    Using the inbuilt array methods only

    Return the first and last elements in this array ['red’, 'yellow’, 'green’, 'blue’]
    Add 'orange’ to the end of this array ['red’, 'yellow’, 'green’, 'blue’]
    console.log the third element in this array ['red’, 'yellow’, 'green’, 'blue’]
    Find the minimum value in this array [23123, 2, -328, 0]
*/

const returnFirstAndLast = (arr) => `First element: ${arr.shift()}\nLast element: ${arr.pop()}`

const concatElementToArray = (arr) => arr.concat('orange')

const returnThirdEl = (arr) => arr[2]

function returnMin(arr) {
    // numbers given as input parameters, NOT array
    return Math.min(...arr)
}

console.log(returnFirstAndLast(['red', 'yellow', 'green', 'blue']))
console.log('------')
console.log(concatElementToArray(['red', 'yellow', 'green', 'blue']))
console.log('------')
console.log(returnThirdEl(['red', 'yellow', 'green', 'blue']))
console.log('------')
console.log(returnMin([23123, 2, -328, 0]))
