# More Array Methods
**There are many useful methods that you get out-of-the-box with JavaScript, but they are only useful, when you thoroughly understand how they work. Let's deconstruct how the common built-in array methods work.**

&nbsp;

**`Array.prototype.some`**  &nbsp; => returns a boolean  
"Are there some values in the array for which the given callback returns a truthy value?"

```javascript
  [1, 2, 3].some(num => num > 2);
  // => true (there are some elements with value of greater than 2)

  [1, 2, 3].some(num => num > 3);
  // => false (there are no element with value greater than 3)
```

We need to be aware of two return values. 1) the return value `some` and 2) return value of the callback at each iteration. The return value of `some` is based on the truthiness of the callback's return value. **If the callback function returns a truthy value for any element in the collection, then the `some` method will return true.**

The `Object.keys`, `Object.values`, and `Object.entries` methods will help you use `some` with objects.
```javascript
  let animals = { a: 'ant', b: 'bear', c: 'cat' };
  Object.values(animals).some(animalName => animalName.length > 4);
  // => false

  Object.values(animals).some(animalName => animalName.length > 3);
  // => true
```
&nbsp;
***
&nbsp;
**`Array.prototype.every`** &nbsp; => returns a boolean  
"Does the callback function returns true for all the elements in the array".  
`every` returns true if the callback's return value in every iteration is truthy.
```javascript
  [1, 2, 3].every(num => num > 2);
  // => false (all of them are not greater than 2)

  [3, 4, 5].every(num => num > 2);
  // => true (all are greater than 2)
```

Using `every` with object:
```javascript
  let animals = { a: 'ant', b: 'bear', c: 'cat' };
  Object.values(animals).every(animalName => animalName.length > 2);
  // true
```
&nbsp;
***
&nbsp;
**`Array.prototype.find`** &nbsp; => returns an element or `undefined`  
"Give me the first element for which the callback returns truthy value"  
`find` takes a callback function as an argument and returns the first element for which the callback returns a truthy value.
```javascript
 // give me the first number that is greater than 2
  [2, 1, 4, 3, 5].find(num => num > 2);
  // => 4 (is the first element that is greater than 2)
```
`3` and `5` also satisfy the condition, but `find` stops looking once it finds a matching element.  
If the callback doesn't return a truthy value for any element, `find` rturns `undefined`
```javascript
  [2, 1, 4, 3, 5].find(num => num < 1);
  // => undefined
```
&nbsp;
***
&nbsp;
**`Array.prototype.findIndex`** &nbsp; => returns an index position or -1.  
"Give me the index of the first element for which the callback returns truthy value."  
`findIndex` functions like `find` except it returns the index of the element for which the callback returns a truthy value.
```javascript
  [2, 1, 4, 3, 5].findIndex(num => num > 2);
  // => 2 (index of 4 is 2)
```
When callback doesn't return truth value for any of the elements, `findIndex` returns `-1`
```javascript
  [2, 1, 4, 3, 5].findIndex(num => num < 1);
  // => -1 (no match)
```