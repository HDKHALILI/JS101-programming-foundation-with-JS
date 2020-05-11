
// Objects vs Primitves
// JavaScript has two catagories of data types: primitives and objects.

// Primitives are the simplest, most basic types in JavaScript.
// they are: strings, numbers, boolean, null and undefined

// Objects are complex values composed of primitives values or other objects.
// they include, but not limited to:
// Simple Objects {}
// Arrays []
// Date Objects
// Functions

let number = 20;
// + operator return a new primitive value that will be assigned to 'newNumber'
let newNumber = number + 1;
console.log(newNumber); // => 21

console.log(number); // => 20

let object = { a: 1, b: 2, c: 3 };
// we are changing part of the object
// specifically the value of property 'c'
// the + operator returns a new value that will be assigned
// to the property 'c'
object.c = object.c + 1;
console.log(object); // => { a: 1, b: 2, c: 4 }

// --------
// - Every value in JavaScript is either a primitive or an object.
// - Primitives are atomic value -- they are indivisible.
// - Objects are 'compound' values made up of primitives or other objects.
// - Primitive values are immutable. In other words, you can't add to, remove
//   from or otherwise change a primitive value. Any operation performed on
//   a primitive value returns a new primitive value.
// - Objects are immutable. That is, certain operations on objects can change
//   object in place. All variables that have a reference to that object will
//   see that change.