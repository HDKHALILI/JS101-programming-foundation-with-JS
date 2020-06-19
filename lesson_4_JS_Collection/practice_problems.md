# Practice Problems

**Practice Problem 1**  
What is the return value of `filter` method call below? Why?
```javascript
  [1, 2, 3].filter(num => 'hi'); // => [1, 2, 3]
```
The return value => `[1, 2, 3]`  
`filter` perform selection based on the truthiness of the callback's return value. Since the return value `hi` is always truthy, `filter` returns a new array containing all the elements from the original array.

***

**Practice Problem 2**  
What is the return value of `map` in the following code? Why?
```javascript
  [1, 2, 3].map(num => {
    num * num;
  });
  // => [undefined, undefined, undefined]
```
The return values => `[undefined, undefined, undefined]`  
`map` fills the array with the return value of the callback. In this case the callback doesn't have an explicit return statement, which means the implicit return value of it is `undefined`. So `map` returns a new array of the same size filled with `undefined`.

***

**Practice Problem 3**  
The following code differs slightly from the above code. What is the return value of `map` in this case? Why?
```javascript
  [1, 2, 3].map(num => num * num);
  // => [1, 4, 9]
```
Return value => `[1, 4, 9]`  
When the arrow function is used this (`num => num * num`) way (with out `{}`), JavaScript uses the computed value as the return value.

***

**Practice Problem 4**  
What is the return value of the following statement? Why?
```javascript
  ['ant', 'bear', 'caterpillar'].pop().length;
  // 11
```
Return value => `11`  
`pop` removes the last element of the array (mutates array) and returns it. `pop().length` returns the length of the removed element, in this case `"caterpillar".length` which is 11.

***

**Practice Problem 5**  
What is the callback's return value in the following code? Also, what is the return value of `every` in this code?
```javascript
  [1, 2, 3].every(num => {
    return num = num * 2;
  });
  // => 2
  // => 4
  // => 6
  // => true
```
Return value => `2 4 6 true`  
At each iteration the callback returns the return value of expression `num = num * 2` which will be `2, 4, 6`. The return value of all iteration is truthy therefor, `every` returns `true`.

***

**Practice Problem 6**  
How does `Array.prototype.fill` work? Is it destructive? How can we find out?
```javascript
  let arr = [1, 2, 3, 4, 5];
  arr.fill(1, 1, 5);
```
`fill` method changes all elements in an array to a given value from start index (default is `0`) to an end index (default is `array.length`). It returns the modified array.  
`fill` is a destructive method. We can find out using the documentation or checking in Node REPL.

***

**Practice Problem 7**  
What is the return value of `map` in the following code? Why?
```javascript
  ['ant', 'bear'].map(elem => {
    if (elem.length > 3) {
      return elem;
    }
  });
  // => [undefined, 'bear']
  // no explicit return statement --> implicit return value is undefined
```
Return value => `[undefined, 'bear']`  
The callback only has explicit return statement for elements with length greater than 3.The first element doesn't satisfy the condition, with the absence of explicit return statement the return value is `undefined`. The second element does satisfy the condition and the element (`'bear'`) is returned.

***

**Practice Problem 8**  
Take a look at the following array.
```javascript
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
```
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array.
```javascript
  { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5}
```
```Javascript
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
  let obj = {}
  flintstones.forEach((name, index) => {
    obj[name] = index
  });
  console.log(obj);
  // => { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5}
```

***

**Practice Problem 9**  
Add up all of the ages from the Munster family object:
```javascript
  let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
  }

  let totalAges = Object.values(ages).reduce((ageSum, currentAge) => ageSum + currentAge, 0);
  console.log(totalAges); // => 6174
```

***

**Practice Problem 10**  
Pick out the minimum age from our current Muster family object:
```javascript
  let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
  }

  // Using Math.min
  // let minAge = Math.min(...Object.values(ages));

  // Using loop
  let agesArray = Object.values(ages);
  let minAge = agesArray[0];
  agesArray.forEach(age => {
    if (minAge > age) {
      minAge = age;
    }
    
  });
  console.log(minAge); // 10
```