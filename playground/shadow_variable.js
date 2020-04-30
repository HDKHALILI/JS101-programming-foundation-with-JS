// Why is it that I can assign a new value to a variable defined outside
// the current function, but it doesn't work when I pass that variable as
// a parameter to the function?
let number = 5;

// the number parameter shadow the variable number
// by creating a seperate and independent variable with the same name,
// but with the scope limited to the function
function test(number) {
  // we are reassinging number paramenter
  // primitive types are immuteable - can't change
  number = 3;
}

test(number);
console.log(number);
// => 5

let evens = [0, 2, 4, 6, 8];
function addToEvenArray(evens) {
  // since array are immutable we can mutate it
  // like add or remove item from it
  evens.push(10);

  // if we go ahead and reassign evens
  // it will change the value of evens outside this function
  evens = [1, 3, 5];
}

addToEvenArray(evens);
console.log(evens); // -> [0, 2, 4, 6, 8, 10]