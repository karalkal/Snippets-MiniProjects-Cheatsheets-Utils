const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element.toUpperCase() + " is a great letter"));
console.log('--')

const array2 = ['a', 'b', 'c'];
array2.map(x => console.log(`${x} is a great letter`))
console.log('--')

const array3 = [11, 11, 11, 11];
console.log(array3.reduce((current, next) => current + next, 10000))


