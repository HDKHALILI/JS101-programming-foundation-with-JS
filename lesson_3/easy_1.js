// Question 1:
// Will the code below raise an error?
console.log(`Question 1 ${"-".repeat(10)}`);
let numbers = [1, 2, 3];
numbers[6] = 5;
// Answer:
// The above code will not raise an error
// Bonus:
// What will this line return?
// numbers[4]; => undefined
// Note: although numbers[4] returns 'undefined', the value at that index
// is not undefined. It is just saying it is empty.

// Question 2:
// How can you determine whether a given string ends with an exclamation
// mark (!)?
console.log(`Question 2 ${"-".repeat(10)}`);
// We can use String.prototype.endsWith()
let str1 = "Come over here!";
console.log(str1.endsWith("!"));
let str2 = "What's up, Doc?";
console.log(str2.endsWith("!"));

// we can check last index using .length - 1;
console.log(str1[str1.length - 1] === "!");
console.log(str2[str2.length - 1] === "!");

// Question 3:
// Determine whether the following object of people and their age
// contains an entry for 'Spot':
console.log(`Question 3 ${"-".repeat(10)}`);
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// Using Object.keys():
console.log(Object.keys(ages).includes("Spot"));
// Using Object.prototype.hasOwnProperty()
console.log(ages.hasOwnProperty("Spot"));

// Question 4:
// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalised.
console.log(`Question 4 ${"-".repeat(10)}`);
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
console.log(munstersDescription);

// Question 5:
// What will the following code output?
console.log(`Question 5 ${"-".repeat(10)}`);
// is 'false' kind of the same as '0', yes they both are falsy
console.log(false == "0"); // => true
// is 'false' exactly the same as '0', no: false = boolean, "0" = string
console.log(false === "0"); // => false

// Question 6:
console.log(`Question 6 ${"-".repeat(10)}`);
// We have most of Munster family in our ages object:
ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

ages = Object.assign(ages, additionalAges);
console.log(ages);

// Question 7:
// Determine whether the name 'Dino' appears in the strings below -- check
// each string seperately):
console.log(`Question 7 ${"-".repeat(10)}`);
let string1 =
  "Few things in life are as important as house training your pet dinosaur.";
console.log(string1.includes("Dino"));
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(string2.includes("Dino"));

// Question 8:
// How can we add the family pet, "Dino", to the following array?
console.log(`Question 8 ${"-".repeat(10)}`);
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// Question 9:
// In the previous problem, our first answer added 'Dino' to the array like
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"]
// flintstones.push("Dino");
console.log(`Question 9 ${"-".repeat(10)}`);
flintstones.push("Dino", "Hoppy");

// Question 10:
// Return a new version of this sentence that ends just before the word
// 'house'. Don't worry about spaces or punctuation: remove everything
// starting from the beginning of 'house' to the end of the sentence.
console.log(`Question 10 ${"-".repeat(10)}`);
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.slice(0, advice.indexOf("house"));
console.log(`'${newAdvice}'`);
