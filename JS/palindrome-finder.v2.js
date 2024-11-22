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

const characters = '0123456789';

// Feel free to change this value
const originalStringLen = 10000000;
// Generate the random string of digits
let originalString = '';
for (let i = 0; i < originalStringLen; i++) {
    originalString += characters[Math.floor(Math.random() * characters.length)];
}

console.log("Original string is: ", originalString);

let palindromeArr = [];

/*  Concept: 
    If an over-3-character string is a palindrome then if we remove the outermost characters we still get a palindrome.
    1. Iterate over whole string in pairs. If neighbouring characters are identical, check next ones (left/right). 
    If also identical => palindrome. Continue until no longer identical. 
    2. Use similar logic for triplets (outer values are identical)
*/

const startTime = performance.now();

for (let i = 0; i < originalStringLen; i++) {       // -1 as we will be comparing with char on the right 
    // console.log("index:", i);
    // Just declare, depending on the case we examine different indices
    let startIdx;
    let endIdx;

    // check for EVEN-length palindromes - if neighbours match, check for 4-char palindrome, then 6-char etc
    if (originalString[i] === originalString[i + 1]) {
        startIdx = i;
        endIdx = i + 1;
        // console.log("found matching neighbours", originalString[startIdx], originalString[endIdx], "at indices", startIdx, endIdx)

        // If starting at index 0 no need to check backwards obviously, so we start at 1, i.e. first iteration (i=0) is missed. 
        // Similarly, for end of string: if length is 10, end index 9 is the last we are interested in
        while (startIdx >= 1 && endIdx < originalStringLen - 1) {
            startIdx--;
            endIdx++;
            // console.log("now checking left and right...", originalString[startIdx], originalString[endIdx], "at indices", startIdx, endIdx)
            if (originalString[startIdx] === originalString[endIdx]) {
                let evenPalindrome = originalString.slice(startIdx, endIdx + 1);
                // console.log("EVEN PALINDROME FOUND!", evenPalindrome, "between", startIdx, endIdx);
                palindromeArr.push(evenPalindrome)
            }
            else {
                break
            }
        }
    }

    // check for odd-length palindromes - start at index 0 and 2, then 1 and 3 etc.
    startIdx = i;
    endIdx = i + 2;
    // In this loop we test string first (start at index 0 and 2), 
    // then decrement/increment indices and continue testing (if indices are still within range)
    while (startIdx >= 0 && endIdx < originalStringLen - 1) {
        if (originalString[startIdx] === originalString[endIdx]) {
            let oddPalindrome = originalString.slice(startIdx, endIdx + 1);
            // console.log("ODD PALINDROME FOUND!", oddPalindrome, "between", startIdx, endIdx);
            palindromeArr.push(oddPalindrome);
            startIdx--;
            endIdx++;
            // console.log("now checking left and right...", originalString[startIdx], originalString[endIdx], "at indices", startIdx, endIdx)
        }
        else {
            break
        }
    }
}

let sortedArr = palindromeArr.sort((a, b) => b.length - a.length);


console.log(`Found ${palindromeArr.length} palindromes:\n`, sortedArr);

const endTime = performance.now();
console.log(`Search of string with a length of ${originalStringLen} took ${(endTime - startTime) / 1000} seconds`)



