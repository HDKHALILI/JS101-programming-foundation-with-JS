// Question 8:
// One day, Spot was playing with the Munster family's home computer, and
// he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoData) {
  Object.values(demoData).forEach((familyMember) => {
    familyMember.age += 42;
    familyMember.gender = "other";
  });
}

// After writing this function, he typed the following code:
messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit Enter key with his tail.
// Did the family's data get ransacked? Why or why not?
// Answer:
// Yes the data got ransacked. In JavaScript, objects are passed by reference.
// The program doesn't reassign demoObject, it just use it as is. Therefore,
// the object that get's changed by the function is the 'munsters' object.
console.log(munsters);
