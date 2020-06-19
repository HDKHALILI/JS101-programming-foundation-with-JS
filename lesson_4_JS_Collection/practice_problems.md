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