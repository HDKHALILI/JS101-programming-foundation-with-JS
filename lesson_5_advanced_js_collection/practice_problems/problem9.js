// Practice Problem 9

// Given the following data structure, return a new array with the same
// structure, but with the subarrays ordered -- alphabetically or numerically
// as appropriate -- in ascending order.

let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((element) => {
  return element.slice().sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }

    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
});
console.log(arr);
console.log(sortedArr);

let sortedArr2 = arr.map((subArr) => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(sortedArr2);
