// Pseudo-Code: writing your logic in natural lanuage - for programmer (human)
// Purpose: there are two layers to solving any problem:
// - The logical problem domain layer - pseudocode allows you to figure out
// the logic of the problem without worrying about language syntax
// - the syntactical programming language layer
// casula pseudocode: doesn't contain any keyword for programming
// structure
// formal pseudocode: contains keywords that reperesent programming structure
// Key words:
// START: start of program
// SET: set a variable that we can use later
// GET: retieve input from user
// PRINT: display output to user
// READ: retrieve a value from variable
// IF/ELSE IF/ELSE: show conditional branches of in logic
// WHILE: show looping logic
// END: end of the program

// Example
// casual:
// Give  collection of numbers.
// Iterate through the collection one by one.
//  - save the first value as the starting value.
//  - for each iteration, compare the saved value with the current value.
//  - if the current value is greater
//    - reassign the saved value as the current value
//  - otherwise, if the current value is smaller or equal
//    - move to the next value in the collection
// After iterating through the collection, return the saved value

// Formal:
// START
// # Given a collection of integers called "numbers"
// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1
// WHILE iterator <= length of numbers
//  SET currentNumber = value within numbers collection at space "iterator"
//  IF currentNumber > savedNumber
//    savedNumber = currentNumber
//  ELSE
//    skip to the next iteration
//  iterator = iterator + 1
// PRINT savedNumber
// END

// Translating Pseudo-Code to Program Code
function findGreatest(numbers) {
  let savedNumber = numbers[0];
  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num
    }
  });
  return savedNumber;
}

// Exercises
// 1. a function that returns the sum of two numbers
// --- casual ---
// Given two numbers, (a and b)
// Add a to b
// return the result
// --- formal ---
// START
// # Given two numbers (a and b)
// PRINT a + b
// END

// 2. a function that takes an array of strings, and returns a string
// that is all those strings concatenated together
// --- casual ---
// Given a collection of strings
// Create a variable to hold the final value
// Iterate through the collection on by one:
//  - for each iteration add the current string to saved string
// After iterating through the collection, return the saved value
// --- formal ---
// START
// # Given a collection string called "strings"
// SET iterator = 1;
// SET finalString = ''
// WHILE iterator <= length of strings
//  SET currentString = value within strings collection at space 'iterator'
//  finalString = finalString + current string
//  iterator = iterator + 1
// PRINT finalString
// END

// 3. a function that takes an array of integers, and returns a new array
// with every other element
// --- casual ---
// Given a collection of numbers
// Create a variable that to hold the new array
// Iterate through collection one by one:
//  - for each iteration
//  - if the position of current value is even
//    - add the current value to the new array
//  - otherwise
//    - move to the next value in the collection
// After iterating though the collection, return the new array
// --- formal ---
// START
// # Given a collection of integers called 'numbers'
// SET iterator = 0
// SET newArray = []
// WHILE iterator < length of numbers
//  SET currentNumber = value within numbers collection at space 'iterator
//  IF iterator % 2 is 0
//    append currentNumber to newArray
//  ELSE
//    skip to the next iteration
//  iterator = iterator + 2
// PRINT newArray
// END