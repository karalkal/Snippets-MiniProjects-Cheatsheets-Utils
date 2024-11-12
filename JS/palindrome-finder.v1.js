/************** Instructions **************/

// A palindrome is a string that reads the same forwards as backwards eg. 45654 or 567765 (note there are both even and odd length palindromes)
// Your goal is to find every palindrome in the generated string (with a length of 3 characters or more) and return them in an array with no duplicates, longest palindromes first.
// I recommend starting off by testing with a stringLength of 1000 and then raising it up to 10,000,000 once you have optimized your program.
// As a rough idea a well optimized program should be able to complete this task with a string length of 10,000,000 within a couple of seconds.
// You should not need to change anything in the program setup section except for the stringLength variable.
// You should aim to write code that performs well but is also very readable and maintainable as if it were going to be deployed to a production environment.
// Use sensible variable names and try to set out your code clearly with comments where necessary.
// Good Luck and have fun!

/************** Program Setup **************/

// The characters used in the string - you shouldn't need to change this

const startTime = performance.now();

const characters = '0123456789';

// Feel free to change this value
const originalStringLen = 100000;    // Don't try above 100.000, even this takes 1.5 min

// Generate the random string of digits
let originalString = '';
for (let i = 0; i < originalStringLen; i++) {
    originalString += characters[Math.floor(Math.random() * characters.length)];
}

console.log("Original string is: ", originalString);

let palindromeArr = [];

// Outer loop starts with initial length of 3. 
// Inner loop iterates over whole string and tests for palindromes with given length.
// First it runs the testing function with "outermost" numbers. If they are not equal, string is not palindrome, continue to next iteration.
// Once inner loop has finished increment length to be tested.

for (let testedStrLen = 3; testedStrLen <= originalStringLen; testedStrLen++) {
    for (let startIdx = 0; startIdx <= originalStringLen - testedStrLen; startIdx++) {      // for 10-digit str, start at index 0, finish at index 7 (initially)
        let testedStr = originalString.slice(startIdx, startIdx + testedStrLen);
        let isPalindrome = testString(testedStr, testedStrLen); // pass string length as well to avoid recalculation it again in function
        if (!isPalindrome) {
            continue
        }
        // console.log("Palindrome found!", testedStr); // if this line is reached, string is palindrome
        palindromeArr.unshift(testedStr);
    }
}

console.log(`Found ${palindromeArr.length} palindromes:\n`, palindromeArr);

const endTime = performance.now();
console.log(`Search of string with a length of ${originalStringLen} took ${(endTime - startTime) / 1000} seconds`)




function testString(testedStr, testedStrLen) {
    // console.log("testedStr:", testedStr, " | ", "testedStrLen:", testedStrLen);

    for (let frontIdx = 0; frontIdx < Math.floor(testedStrLen / 2); frontIdx++) {
        let backIdx = testedStrLen - 1 - frontIdx;
        if (testedStr[frontIdx] !== testedStr[backIdx]) {
            return false;
        }
    }
    return true;

}
