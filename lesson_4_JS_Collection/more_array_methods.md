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
&nbsp;
***
&nbsp;
**`Array.prototype.reverse`** &nbsp; => returns the reversed array  
"I will reverse the original array in place for you, be aware the array will change."  
`reverse` reverses the elements of the array it is called on. The first element becomes the last, and the last becomes the first. Note: it reverse in place (mutates the array).
```javascript
  let nums = [1, 2, 3, 4, 5];
  nums.reverse();
  console.log(nums);
  // => [5, 4, 3, 2, 1]
```
If you don't want to mutate the original array, use `Array.prototype.slice` to make a copy and then reverse.
```javascript
  let nums = [1, 2, 3, 4, 5];
  let reversedNums = nums.slice().reverse();

  console.log(nums); // => [1, 2, 3, 4, 5]
  console.log(reversedNums); // => [5, 4, 3, 2, 1]
```
&nbsp;
***
&nbsp;
**`Array.prototype.includes`** &nbsp; => returns a boolean  
"Does this array have the thing (argument) I am looking for"  
`includes` takes an argument (not callback) that it looks for in the array that it's called on. Returns `true` if it finds it else returns `false`  
```javascript
  [2, 1, 3].includes(1); // => true

  [2, 1, 3].includes(5); // => false
```

**Using `includes` to check for an object with in array**  
```javascript
  let arr = ['a', 'b', { c: 'foo' }];
  arr.includes({ c: 'foo' }); // => false
```
Why does it return `false`? Includes uses `===` operator to compare its argument with elements of the array. `{ c: 'foo' } === { c: 'foo' }` is `false` because they look identical but are not the same object. If we compare the same object we will get `true`
```javascript
  let obj = { c: 'foo' };
  let arr = ['a', 'b', obj];

  arr.includes(obj); // true (because we are comparing the same object)
```
As with so many array methods, `includes` is useful when working with objects.  
Let's check if a certain key exist in an object:
```javascript
  let obj = { a: 'apple', b: 'banana', c: 'custard' };
  Object.keys(obj).includes('c'); // true
  Object.keys(obj).includes('f'); // => false
```
We can also use `Object.prototype.hasOwnProperty` to check if a key exist in an object
```javascript
  let obj = { a: 'apple', b: 'banana', c: 'custord' };
  obj.hasOwnProperty('c'); // => true
  obj.hasOwnProperty('f'); // => false
```