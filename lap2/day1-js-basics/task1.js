/*

    Return the length of a string
    console.log the word train from this sentence “I dislike trains as a mode of transport”
    Return the fifth letter of the alphabet from this string ‘abcdefghijklmnopqrstuvwxyz’
    Make this string shouty by making it all upper case ‘I love you’


*/
function returnLen(str) {
    return str.length
}

function returnWord(sentence) {
    return sentence.split(' ')[2]
}

function returnFifthLetter(word) {
    return word[4]
}

const capitalizeString = (str) => str.toUpperCase()

console.log(returnLen('This is a sentence!'))
console.log('-----------')

console.log(returnWord('I dislike trains as a mode of transport'))
console.log('-----------')

console.log(returnFifthLetter('abcdefghijklmnopqrstuvwxyz'))
console.log('-----------')

console.log(capitalizeString("I love you"))




