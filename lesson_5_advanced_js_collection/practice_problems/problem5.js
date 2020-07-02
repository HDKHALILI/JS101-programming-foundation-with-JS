// Practice Problem 5

// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

// Compute and display the total age of the male members of the family.

let totalMaleAge = 0;

Object.values(munsters).forEach((member) => {
  if (member.gender === "male") {
    totalMaleAge += member.age;
  }
});

console.log(totalMaleAge);
