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
    1. Iterate over whole string
    Assign indices to vars. Redeclare at each iteration as function will modify them when searching for palindrome matches
    This is SLOW!
    2. Check idx 0|1, 1|2, 2|3, 3|4, if identical run respective function
    3. Check idx 0|2, 1|3, 2|4, 3|5, if identical => already 3-char have palindrome, then run respective function
*/

const startTime = performance.now();

for (let i = 0; i < originalStringLen - 1; i++) {
    // TODO: Think of better var names!
    let firstIdx = i;
    let secondIdx = i + 1;
    let thirdIdx = i + 2;


    // check for EVEN-length palindromes - if neighbours match, check for 4-char palindrome, then 6-char etc
    if (originalString[firstIdx] === originalString[secondIdx]) {
        // console.log("found matching neighbours", originalString[firstIdx], originalString[secondIdx], "at indices", firstIdx, secondIdx);
        checkSubstringIsPalindrome();

    }
    // check for ODD-length palindromes - start at index 0 and 2, then 1 and 3 etc.
    if (originalString[firstIdx] === originalString[thirdIdx]) {
        // console.log("found matching non-neighbours (3-char palindrome)", originalString[firstIdx], originalString[thirdIdx], "at indices", firstIdx, thirdIdx);
        palindromeArr.push(originalString.slice(firstIdx, thirdIdx + 1));
        oddPalindromeCheck();
    }

    // declare function here to have access to index variables
    function checkSubstringIsPalindrome() {
        firstIdx--;
        secondIdx++;

        while (firstIdx >= 0 && secondIdx < originalStringLen - 1) {
            // console.log("now checking left and right...", originalString[firstIdx], originalString[secondIdx], "at indices", firstIdx, secondIdx)
            if (originalString[firstIdx] === originalString[secondIdx]) {
                // console.log("EVEN PALINDROME FOUND!", originalString.slice(firstIdx, secondIdx + 1), "between", firstIdx, secondIdx);
                palindromeArr.push(originalString.slice(firstIdx, secondIdx + 1));
                firstIdx--;
                secondIdx++;
            }
            else {
                break
            }
        }
        return;
    }


    function oddPalindromeCheck() {
        firstIdx--;
        thirdIdx++;

        while (firstIdx >= 0 && thirdIdx < originalStringLen - 1) {
            // console.log("now checking left and right...", originalString[firstIdx], originalString[thirdIdx], "at indices", firstIdx, thirdIdx)
            if (originalString[firstIdx] === originalString[thirdIdx]) {
                // console.log("ODD PALINDROME FOUND!", originalString.slice(firstIdx, secondIdx + 1), "between", firstIdx, thirdIdx);
                palindromeArr.push(originalString.slice(firstIdx, thirdIdx + 1));
                firstIdx--;
                thirdIdx++;
            }
            else {
                break;
            }
            return;
        }
    }
}



// Similarly, for end of string: if length is 10, end index 9 is the last we are interested in



let sortedArr = palindromeArr.sort((a, b) => b.length - a.length);


console.log(`Found ${palindromeArr.length} palindromes:\n`, sortedArr);

const endTime = performance.now();
console.log(`Search of string with a length of ${originalStringLen} took ${(endTime - startTime) / 1000} seconds`)



