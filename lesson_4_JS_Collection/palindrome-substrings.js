// # PROBLEM:
// Given a string, write a function 'palindromeSubstrings' which returns all the
// substrings from a given string which are palindroms. Consider palindrome
//  words case sensitive.


function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;

  while (startSubstrIndex < str.length - 1) {
    while (endSubstrIndex <= str.length) {
      result.push(str.slice(startSubstrIndex, endSubstrIndex));
      endSubstrIndex += 1;
    }

    startSubstrIndex += 1;
    endSubstrIndex = startSubstrIndex + 2;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArray = substrings(str);

  substringsArray.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

// Test Cases:
console.log(palindromeSubstrings('supercalifragilisticexpialidocious')); // => ['ili']
console.log(palindromeSubstrings('abcddcbA')); // => ['ili']
console.log(palindromeSubstrings('palindrom')); // => []
console.log(palindromeSubstrings('')); // => []