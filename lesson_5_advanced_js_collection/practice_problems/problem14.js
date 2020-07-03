// Practice Problem 14

// Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables. The
// sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// Rules:
// return array of colors and size
// colors: capitalised
// size: Uppercased

let colorsAndSize = [];

for (let produce in obj) {
  if (obj[produce].type === "fruit") {
    let colorsCapitalised = obj[produce].colors.map((color) => {
      return color[0].toUpperCase() + color.substring(1);
    });
    colorsAndSize.push(colorsCapitalised);
  } else {
    let sizeCapitalised = obj[produce].size.toUpperCase();
    colorsAndSize.push(sizeCapitalised);
  }
}

console.log(colorsAndSize);

// Alternative solution
let colorsAndSize2 = Object.values(obj).map((attributes) => {
  if (attributes.type === "fruit") {
    return attributes.colors.map((color) => {
      return color[0].toUpperCase() + color.slice(1);
    });
  } else {
    return attributes.size.toUpperCase();
  }
});

console.log(colorsAndSize2);
