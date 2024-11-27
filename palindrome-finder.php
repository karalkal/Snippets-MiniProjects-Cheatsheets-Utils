<?php

$characters = '0123456789';
$originalStringLen = 10000000;
$originalString = '';

// Generate the original string
for ($i = 0; $i < $originalStringLen; $i++) {
    $originalString .= $characters[rand(0, strlen($characters) - 1)];
}

echo "Original string is: {$originalString}";

$start_time = microtime(true);

$palindromeArr = [];

// Check for palindromes in the original string
for ($i = 0; $i < $originalStringLen - 1; $i++) {
    // check for EVEN-length palindromes - if neighbours match, check for 4-char palindrome, then 6-char etc
    if ($originalString[$i] === $originalString[$i + 1]) {
        checkSubstringIsPalindrome($originalString, $palindromeArr, $i, $i + 1, $originalStringLen);
    }
    // check for ODD-length palindromes - start at index 0 and 2, then 1 and 3 etc.
    if ($i + 2 < $originalStringLen && $originalString[$i] === $originalString[$i + 2]) {
        $palindromeArr[] = substr($originalString, $i, 3);
        checkSubstringIsPalindrome($originalString, $palindromeArr, $i, $i + 2, $originalStringLen);
    }
}

// Sort the palindrome array by length in descending order
usort($palindromeArr, function ($a, $b) {
    return strlen($b) - strlen($a);
});

echo "Found " . sizeof($palindromeArr) . " palindromes:\n" . $palindromeArr;

$end_time = microtime(true);
$execution_time = ($end_time - $start_time) / 1000;

echo "Search of string with a length of {$originalStringLen} took {$execution_time} seconds";


// Function to check if a substring is a palindrome
function checkSubstringIsPalindrome($originalString, &$palindromeArr, $leftIdx, $rightIdx, $originalStringLen)
{
    $leftIdx--;
    $rightIdx++;
    while ($leftIdx >= 0 && $rightIdx < $originalStringLen) {
        if ($originalString[$leftIdx] === $originalString[$rightIdx]) {
            $palindromeArr[] = substr($originalString, $leftIdx, $rightIdx - $leftIdx + 1);
            $leftIdx--;
            $rightIdx++;
        } else {
            break;
        }
    }
    return;
}

?>