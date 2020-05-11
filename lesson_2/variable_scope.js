// Variable Scopes
// A variable's scope is the part of the program that can access that
// variable by name. -- this is true for all programming languages
// Specifically, variable scoping rules describe how and where the language
// finds and retrieves values from previously declared variables.

// In JavaScript, there are two different types of scope: global and local

// Global Scope - available everywhere in the program
let name = 'Julian';
console.log(name);

for (let counter = 0; counter < 3; counter += 1) {
  console.log(name);
}

console.log(name);
// name is globally scoped, which means that it is available for use
// anywhere in the program --- globally or from inside a function or block
// NOTE: there is subtle difference to global scope when you compare
// JavaScript in Browser and JavaScript in Node.js.
// In Node.js global variable is only available in the file/module you
// declare it in. If you want to use it elsewhere you need to explicitly
// export and import it.

// ------------------
// Local Scope
// Local Scope comes in two forms: function scope and block scope.

// Function Scope
// Functions define a new scope for local variables. You can think of the
// scope defined by a function as an inner scope.
// Nested functions define nested scopes.
// A variables scope is determined by where it is declared.
// --- Variables declared in an outer scope can be accessed in an inner scope,
//      but not vice versa

// Rule 1: outer scope variables can be accessed by the inner scope
// outer scope
let a = 1;

function logA() {
  // inner scope
  console.log(a); // accessing outer scope variable
  a += 1; // reassigning an outer scope variable
}

logA();
console.log(a); // => 2;
// The above example demonstrate two things:
// 1 - inner scope can access outer scope variables.
// 2 - youles can change variables from an inner scope and have that change
//     affect the outer scope.

// Rule 2: inner scope variables cannot be accessed in outer scope.
function aFunc() {
  // declaring a here - scoped here
  let a = 1;
}

aFunc();
console.log(a); // => ReferenceError: a is not found
// Note local variable only comes into existence when you call that function.
// The mere act of defining a function doesn't create any variables.
// The function decleration does, however, define the scope of the variable

// Rule 3: peer scopes do not confilict
// allows us to reuse variable names.
function funcA() {
  let a = 'Hello';
  console.log(a);
}

function funcB() {
  // function cannot reference varibale declared in other functions.
  console.log(a); // ReferenceError: a is not found
}

funcA();
funcB();

// Rule 4: nested functions have their own variable scope
// Nested functions follow the same rules of inner and outer scoped variables.
// when dealing with functions, out usage of what's 'outer' or 'inner' is
// going to be relative. we will use 'first level', 'second level' and so on
let a = 1; // first level variables

function foo() { // second level
  let b = 2;

  function bar() { // third level
    let c = 3;
    console.log(a); // => 1
    console.log(b); // => 2
    console.log(c); // => 3
  }

  bar();

  console.log(a); // => 1
  console.log(b); // => 2
  console.log(c); // => ReferenceError
}

foo();

// Rule 5: inner scope variable can shadow outer scope variables
let number = 10;
// the callback function have access to two variable with the same name
// one is local and one is from the outer scope.
// the local variable will be used - variable shadowing
[1, 2, 3].forEach(number => console.log(number)); // => 1 2 3 'not 10'
// Variable Shadowing: a local variable that has the same name as a variable
// in the outer scope - the inner scope variable prevents access to the
// outer scope variable