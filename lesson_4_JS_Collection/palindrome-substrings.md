# PROBLEM:

Given a string, write a function 'palindromeSubstrings' which returns all the substrings from a given string which are palindroms. Consider palindrome words case sensitive.

## Test Cases:

```javascript
  palindromeSubstrings('supercalifragilisticexpialidocious') // => ['ili']
  palindromeSubstrings('abcddcbA') // => ['ili']
  palindromeSubstrings('palindrom') // => []
  palindromeSubstrings('') // => []
```

## Understanding the Problem:
input: string

output: array of substrings (not the same object)

Rules:

     * Explicit Requirnments:
      - return all substrings that are palindrome.
       (palindrome: word that reads the same forward and backward)
      - Palindrome are case sensiti

Data Structure:

    Output: arr

## Algorithm:

  substrings method
  =
  - create an empty array called `result` that will contain all of the required substrings
  - declare a variable `startSubstrIndex` and assign 0 to it.
  - declare a variable `endSubstrIndex` and assign value of `startSubstrIndex + 2` to it.
  - Enter loop which will break when `startSubstrIndex` is equal to `str.length`
    - Winthin that loop enter anonther loop that will break if `endSubstrIndex` is equal to `str.length`
      - append to the result array part of the string from `startSubstrIndex` to `endSubstrIndex`
      - increment `endSubstrIndex` by 1.
    - end inner loop
    - increment `startSubstrIndex` by 1.
    - reassign `endSubstrIndex` to `starSubstrIndex + 2`
  - end outer loop
  - return `result` array

  isPalindrom method
  =
  - Inside the `isPalindrome` method, check whether the string value is equal to its reversed value. You can use the `Array.prototype.reverse` method along with `split` and `join`.

  palindromSubstrings method
  =
  - declare a result variable and initialise it to an empty array
  - create an array of substrArray that contains all of the substrings of the input string that are atleast 2 characters long.
  - loop through the words in the substrArray array.
    - if the word is a palindrome, append it to the result array
  - return the result array


## Code

```javascript
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
```