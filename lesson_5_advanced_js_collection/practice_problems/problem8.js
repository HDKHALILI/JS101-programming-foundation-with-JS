// Practice Problem 8

// Using the forEach method, write some code to output all vowels from the
// strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

Object.values(obj).forEach((words) => {
  words.forEach((word) => {
    word.split("").forEach((char) => {
      if ("aeiou".includes(char.toLowerCase())) {
        console.log(char);
      }
    });
  });
});
