// Practice Problem 10

// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending
// order.

// string: sort by alphabets
// number: sort numerically

let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

let sortedArr = arr.map((subArr) => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === "number") {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(sortedArr);
