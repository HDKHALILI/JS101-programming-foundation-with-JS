// Question 1:
// Will the following functions return the same result?

function first() {
  return {
    prop1: " hi there",
  };
}

function second() {
  return; // bad practice
  {
    prop1: "hi there";
  }
}

// The functions do not return the same thing
console.log(first()); // => { prop1: 'hi there' }
console.log(second()); // => undefined

// Why: this issue is because technically semicolons are optional in
// JavaScript. JS Engine add semicolon where it thinks it is needed.
// In the second function JS engin adds ; after return and therefore we
// get undefined.

// Question 2:
// What does the last line in the following code output?
let object = { first: [1] };
// along with 'first' 'numArray' is referencing [1].
let numArray = object["first"];
// modifying the original array., 'first' will see it too
numArray.push(2);
console.log(numArray); // => [1, 2]
console.log(object); // => { first: [1, 2]}

// Explation: numArray is a reference to original array, [].
// numArray.push(2) modifies this array.
// If we want to modify numArray but not object, we have 2 options:
// 1- We can declare and initialise numArray with a reference to a copy of the
// original array:
{
  let object = { first: [1] };
  let numArray = object["first"].slice();
  numArray.push(2);
}

// 2- We can use 'Array.prototype.concat(), which returns a new array
// instead of modifying the original array:
{
  let object = { first: [1] };
  numArray = object.first.concat();
  numArray.push(2);
}

// Question 3:
// Given the following similar sets of code, what will each code snippet
// print?
// A:
{
  function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`); // => ["one"]
  console.log(`two is: ${two}`); // => ["two"]
  console.log(`three is: ${three}`); // => ["three"]

  // The function doesn't modify the arguments
  // it just reassign them to different values. (local variable reassignment)
  // variable shadowing prevents the outer variable reassignment.
  //  -> reassignment is contained within the function
}

// B:
{
  function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`); // => ["one"]
  console.log(`two is: ${two}`); // => ["two"]
  console.log(`three is: ${three}`); // => ["three"]

  // The function doesn't modify the arguments
  // it just reassign them to different values. (local variable reassignment)
  // variable shadowing prevents the outer variable reassignment.
  //  -> reassignment is contained within the function
}

// C:
{
  function messWithVars(one, two, three) {
    one.splice(0, 1, "two");
    two.splice(0, 1, "three");
    three.splice(0, 1, "one");
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`); // => ["two"]
  console.log(`two is: ${two}`); // => ["three"]
  console.log(`three is: ${three}`); // => ["one"]

  // The function's arguments are Arrays. Arrays are passed by reference.
  // The function modifies the arguments, that change is seen by the arrays
  // that were passed as arguments.
}

// Question 4:
// Ben was tasked to write a simple javascript function to determine whether
// an input string is an IP address using 4 dot-separated numbers, e.g.
// 10.4.5.11. He is not familiar with regular expressions.

// Alyssa supplied Ben with a function names isAnIpNumber. It determines
// whether a string is a number string between 0 and 255 as required for
// IP numbers and asked Ben to use it. Here is the code that Ben wrote.
function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

// Alyssa reviewed Ben's code and said, "It is a good start, but you missed
// a few thins. You're not returning a false condition, and you're not
// handling the case when the input string has more or less than 4
// components, e.g., 4.5.5 or 1.2.3.4.5: both of those values should be
// invalid"

// Understanding the Problem:
// Input:
//  - string
// Output:
// - true or false
// Rule:
//  - must be 4 dot separated numbers (0 - 255 inclusive)
{
  function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    if (dotSeparatedWords.length !== 4) {
      return false;
    }
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }

    return true;
  }
  console.log(isDotSeparatedIpAddress("10.4.5.11")); // => true
  console.log(isDotSeparatedIpAddress("10.4.5")); // => false
  console.log(isDotSeparatedIpAddress("10.4.5.11.12")); // => false
  console.log(isDotSeparatedIpAddress("10.4.5.")); // => false
}
