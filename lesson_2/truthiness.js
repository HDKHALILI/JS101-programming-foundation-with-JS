//

// JavaScript uses 'true' and 'false' priitive values as boleans.
// you can print them, assigin them to variables, pass them and
// test them

// printing
console.log(true);
console.log(false);

// assing to variable
let a = true;
let b = false;

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string
  }
}

// parameter 'longer' will be assigned true
makeLonger('abc', true);
// parameter 'longer' will be assigned false
makeLonger('xyz', false);

function isDigit(char) {
  if (char >= '0' && char <= '9') {
    return true;
  } else {
    return false;
  }
}

isDigit('5') // true
isDigit('a') // false

// test
let value = true;
if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!");
}