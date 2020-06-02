// Question 1:
// Given a string, return a new string that replaces every occurrence of the
// word 'important' to 'urgent':
console.log(`Question 1 ${"-".repeat(10)}`);
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
// let updatedAdvice = advice.replace("important", "urgent");
let updatedAdvice = advice
  .split(" ")
  .map((word) => (word === "important" ? "urgent" : word))
  .join(" ");
console.log(updatedAdvice);

// Question 2:
// The 'Array.prototype.reverse' method reverses the order of elements in an
// array, and 'Array.prototype.sort can rearrange the elements in a variety
// of ways, including descending. Both of these methods mutate the original
// array as shown below. Write two distinct ways of reversing the array
// without mutating the original array. Use 'reverse' for the first solution
// and 'sort' for the scond.
// Bonus 1: Can you do it using the 'Array.prototype.forEach() method?
// Bonus 2: Can you do it using the 'Array.prototype.reduce() method?
console.log(`Question 2 ${"-".repeat(10)}`);
let numbers = [1, 2, 3, 4, 5];
let reversed1 = numbers.slice().reverse();
console.log(reversed1);
let reversed2 = [];
numbers.forEach((number, index) => {
  // reversed1.unshift(number);
  reversed2[numbers.length - index - 1] = number;
});
console.log(reversed2);

let reversed3 = numbers.reduce((acc, current, index, array) => {
  // acc.unshift(current);
  // [current, ...acc];
  acc[array.length - index - 1] = current;
  return acc;
}, []);

console.log(reversed3);

let sorted1 = numbers.slice().sort((a, b) => b - a);
console.log(sorted1);

let sorted2 = reversed3
  .reduce((acc, number) => {
    acc.push(number);
    return acc;
  }, [])
  .sort((a, b) => a - b);

console.log(`before: ${reversed3} after: ${sorted2}`);
// Question 3:
// Given a number and an array, determine whether the number is included in
// the array.
console.log(`Question 3 ${"-".repeat(10)}`);

let numbersArr = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true
console.log(numbersArr.includes(number1));
console.log(numbersArr.includes(number2));

// Question 4:
// Starting witht the string:
let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and" infron of it.
console.log(`Question 4 ${"-".repeat(10)}`);
console.log(`Four score and ${famousWords}`);
console.log("Four score and" + " " + famousWords);
console.log("Four score and ".concat(famousWords));

// Question 5:
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing
// the number at index 2, so that the array becomes [1, 2, 4, 5]
console.log(`Question 5 ${"-".repeat(10)}`);
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1);
console.log(nums);

// Question 6:
// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that lokes like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Create a new array that contains all of the above values, but in an
// un-nested format:
// ["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];
console.log(`Question 6 ${"-".repeat(10)}`);
flintstones = [].concat(...flintstones);

// Question 7:
// Consider the following objects
console.log(`Question 7 ${"-".repeat(10)}`);
let flintstonesObj = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};
// Create an array from this object that contains only two elements:
// Barney's name and Barney's number:
// ['Barney', 2]
let barney = [];
Object.keys(flintstonesObj).forEach((key) => {
  if (key === "Barney") {
    barney.push(key, flintstonesObj[key]);
  }
});
console.log(barney);
let barney2 = Object.entries(flintstonesObj)
  .filter((pair) => pair[0] === "Barney")
  .shift();
console.log(barney2);

// Question 8:
// How would you check whether the objects assigned to variables 'numbers'
// and 'table' below are arrays?
console.log(`Question 8 ${"-".repeat(10)}`);
let numbers4 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers4));
console.log(Array.isArray(table));

// Question 9:
// Write two one-line expressions to count the number of lower-case 't'
// characters in each of the following strings:
console.log(`Question 9 ${"-".repeat(10)}`);
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);

// Question 10:
// Back in the stone age (before CSS), we used spaces to align things on the
// screen. If we have a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?
console.log(`Question 10 ${"-".repeat(10)}`);

let title = "Flintstone Family Member";
let tableWidth = 40;
let padding = Math.floor(tableWidth - title.length) / 2;
console.log(padding);
console.log(title.padStart(padding + title.length));
