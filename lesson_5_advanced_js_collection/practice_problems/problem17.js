// Practice Problem 17

// A UUID is a type of identifier often used to uniquely identify items, even
// when some of those items were created on a different server or by a
// different application. That is, without any synchronization, two or more
// computer systems can create new items and label them with a UUID with no
// significant risk of stepping on each other's toes. It accomplishes this feat
// through massive randomization. The number of possible UUID values is
// approximately 3.4 X 10E38, which is a huge number. The chance of a conflict
// is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
// letters a-f) represented as a string. The value is typically broken into 5
// sections in an 8-4-4-4-12 pattern, e.g.,
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

// Rules:
// - array of 5 items
// - element 1: 8 character long
// - element 2: 4 character long
// - element 3: 4 character long
// - element 4: 4 character long
// - element 5: 12 character long

function generateUUID() {
  let hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];
  let uuid = [];

  sections.forEach((section) => {
    uuid.push(generatePattern(hexChars, section));
  });

  return uuid.join("-");
}

function generatePattern(characters, length) {
  let pattern = "";
  while (pattern.length < length) {
    let index = Math.floor(Math.random() * characters.length);
    pattern += String(characters[index]);
  }

  return pattern;
}

console.log(generateUUID());
