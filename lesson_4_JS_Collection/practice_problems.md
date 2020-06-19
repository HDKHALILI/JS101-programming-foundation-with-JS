# Practice Problems

**Practice Problem 1**  
What is the return value of `filter` method call below? Why?
```javascript
  [1, 2, 3].filter(num => 'hi'); // => [1, 2, 3]
```
The return value is => `[1, 2, 3]`  
`filter` perform selection based on the truthiness of the callback's return value. Since the return value `hi` is always truthy, `filter` returns a new array containing all the elements from the original array.