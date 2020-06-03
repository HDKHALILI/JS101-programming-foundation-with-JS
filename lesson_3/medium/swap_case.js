// Question 2: swap case of letters
// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:

function swapCase(string) {
  let output = [];
  string.split("").forEach((char) => {
    if (char === char.toUpperCase()) {
      output.push(char.toLowerCase());
    } else {
      output.push(char.toUpperCase());
    }
  });

  return output.join("");
}
console.log(swapCase(munstersDescription));

function swapCase2(string) {
  return string
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

function swapCase3(string) {
  return string
    .split("")
    .reduce((acc, char) => {
      if (char === char.toUpperCase()) {
        acc.push(char.toLowerCase());
      } else {
        acc.push(char.toUpperCase());
      }
      return acc;
    }, [])
    .join("");
}

console.log(swapCase2(munstersDescription));
console.log(swapCase3(munstersDescription));
