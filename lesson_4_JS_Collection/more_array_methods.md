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
Returns true if the callback's return value in every iteration is truthy.
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