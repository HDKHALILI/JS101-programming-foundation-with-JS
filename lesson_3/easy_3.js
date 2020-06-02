console.log(`Question 1 ${"-".repeat(10)}`);
// Question 1:
// Write four different ways to remove all of the elements from the following
// array:
// 1: using Array.prototype.pop
let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

// 2: using Array.prototype.shift
numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

// 3: using Array.prototype.splice
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

// 4: setting length to 0
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

console.log(`Question 2 ${"-".repeat(10)}`);
// Question 2:
// What will the following code ouptu?
console.log([1, 2, 3] + [4, 5]); // => 1,2,34,5
// here JS coerce the arrays to strings and then concatenates them

console.log(`Question 1 ${"-".repeat(10)}`);
// Qestion 3:
// What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // => 'hello there'

console.log(`Question 1 ${"-".repeat(10)}`);
// Question 4:
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // => [{ first: 42 }, { second: "value2" }, 3, 4, 5]
// explanation: The slice() method copies all the elements of the array
// and returns a new array. However, it performs a shallow copy rather than
// a deep copy. Thus, arr1[0] and arr2[0] point to the same object,
// { first: 'value1' }. Thus, when we replace the value of 'first' in that
// object using arr2, the change shows up in arr1 as well.

console.log(`Question 1 ${"-".repeat(10)}`);
// Question 5:
// The following function unnecessarily uses two 'return' statements to
// eturn boolean values. How can you eliminate the unnecessary duplication?
// Try to come up with at least two different solutions.
function isColorValid(color) {
  // old code
  // if (color === "blue" || color === "green") {
  //   return true;
  // } else {
  //   return false;
  // }

  // refactored code
  // solution 1:
  return color === "blue" || color === "green";
}
// solution 2:
const isColorValid2 = (color) => color === "blue" || color === "green";
// solution 3:
const isColorValid3 = (color) => ["blue", "green"].includes(color);
