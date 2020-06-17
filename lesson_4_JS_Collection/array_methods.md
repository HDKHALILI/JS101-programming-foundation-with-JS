# Array Methods
Using loops like `for` and `while` to iterate over a collection is repetitive. JavaScript provides an easier way to work with arrays through the built-in methods. We will look at `forEach`, `filter`, and `map` methods.

Unfortunately, other collections and *collection-like* types like an object and strings don't have these methods. But we can convert them to arrays and then use these methods.

**`Array.prototype.forEach`**
=> always returns undefined (even if you explicitly return something from the callback)

So far we have used loops to iterate over array, like this:
```javascript
  let numbers = [1, 2, 3];
  let counter = 0;

  while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter += 1;
  }
```

Using `forEach` we can simplify it greatly, but achieve the same result.
```javascript
  let numbers = [1, 2, 3];

  numbers.forEach(number => {
    console.log(number);
  })
```
`forEach` takes a **callback** function as an argument. At each iteration it passes the value of current element to the callback function as the first argument. It also passes index position as the second argument and we can capture it like this: (the callback doesn't have to use those arguments if it doesn't need them)

```javascript
  [1, 2, 3].forEach((number, index) => {
    console.log(`${index}: ${number}`);
  })
```

**`forEach` with Strings**
Strings doesn't have a `forEach` method. We can convert String to array using `String.prototype.split` method. In this example we want to process every character in the string:

```javascript
  // split based on empty string ('' -> every character)
  'abcd'.split('').forEach(char => {
    console.log(char);
  })
```

We can use this approach with other array methods too.

**`forEach` with Objects**
Object doesn't have `forEach`, we can use `Object.keys`, `Object.values`, and `Object.etries` function to readily convert objects into arrays.

Iterating over all values of an object:
```javascript
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  }

  let produceValues = Object.values(produce);

  produceValues.forEach(value => {
    console.log(value);
  });
  // logs:
  //  Fruit
  //  Vegetable
  //  Fruit
  //  Vegetable
```

Iterating over keys of an object:
```javascript
  let produceKeys = Object.keys(produce);
  produceKeys.forEach(key => {
    console.log(key);
  });
```

We can get all of the key-value pairs of an object with `Object.entries`
```javascript
  // returns array of arrays where each array contain key and value in that order
  // [[key, value]...]
  let produceKeyValues = Object.entries(produce);
  // produceKeyValues contains:
  //  [['apple', 'Fruit']
  //   ['carrot', 'Vegetable']
  //   ['pear', 'Fruit']
  //   ['broccoli', 'Vegetable']]

  produceKeyValues.forEach(keyValue => {
    // array destructuring assignment
    let [key, value] = keyValue;

    console.log(`${key} is a ${value}`);
  });
  // logs:
  //  apple is a Fruit
  //  carrot is a Vegetable
  //  pear is a Fruit
  //  broccoli is a Vegetable
```

**`Array.prototype.filter`**

=> returns new array (doesn't mutate its caller)

Allows us to **select** or **filter** certain elements from an array so that we can work with them separately from other elements. --> Reduce complexity --> reduce bugs

We can perform selection using regular `for` or `while` loop:
```javascript
  let numbers = [1, 2, 3];
  let oddNumbers = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
      oddNumbers.push(numbers[index]);
    }
  }
  
  console.log(oddNumbers); // => [1, 3]
```

We can use `filter`:
```javascript
  let oddNumbers = [1, 2, 3].filter(num => num % 2 === 1);
  console.log(oddNumbers); // => [1, 3]
```

`filter` takes a callback function as its argument. At each iteration it passes the value of current element to the callback. It selects the element based on the return value of the callback. If it is truthy (not any of these: `undefined`, `null`, `NaN`, `0`, `''`, and `false`) the element will be selected otherwise, not selected. This means you need to pay special attention to the return value of the callback.

```javascript
  // no element will be selected because callback is not explicitly returning
  // implicit return will be undefined --> falsy
  [1, 3, 3].filter(num => {
    num % 2 === 1;
  });
```

**Note: truthy and falsy aren't values that belong to a specific JavaScript type but are simply a classification of which values JavaScript recognises as representing truth or falsity.**

Question now is whether we can effectively use `filter` to select certain key-value pairs from an object. Let's see:

```javascript
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  let produceKeyValues = Object.entries(produce);
  let onlyVegetables = produceKeyValues.filter(keyValue => {
    let [key, value] = keyValue;
    return value === 'Vegetable';
  });

  console.log(onlyVegetables); // => [['carrot', 'Vegetable'], ['broccoli', 'Vegetable']]
```

It works, but it gives us array which isn't ideal. Maybe we can use `forEach` to convert it to object.
```javascript
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  let produceKeyValues = Object.entries(produce);
  let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
    let [key, value] = keyValue;
    return value === 'Vegetable';
  });

  let onlyVegetables = {};

  onlyVegetablesArr.forEach(keyValue => {
    let [key, value] = keyValue;
    onlyVegetables[key] = value
  })
  console.log(onlyVegetables); // => [carrot: 'Vegetable', broccoli: 'Vegetable']
```

It works but the logic is complicated, let's use `forEach` by itself without using `filter` at all.
```javascript
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  let produceKeyValues = Object.entries(produce);
  let onlyVegetables = {};

  produceKeyValues.forEach(keyValue => {
    let [key, value] = keyValue;
    if (value === 'Vegetable') {
      onlyVegetables[key] = value;
    }
  });

  console.log(onlyVegetables); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

Now that's much better. As it turns out `forEach` by itself is much better choice than `forEach` and `filter` combined for filtering object.

**`Array.prototype.map`**

=> returns new array of the same size as caller(doesn't mutate its caller)

As with `filter`, `map` also considers the return value of the callback. The main difference between these two methods is that `map` uses the return value of the callback to perform transformation instead of selection.

```javascript
  [1, 2, 3].map(num => num * 2);
  // => [2, 4, 6]
```

Let's consider callback that doesn't transform:
```javascript
  [1, 2, 3].map(num => num % 2 === 1);
  // => [true, false, true]
```
The callback's return value is a boolean and `map` returns an array of boolean.

Let's look at another example (no explicit return, and we are not using arrow function's implicit return):
```javascript
  [1, 2, 3].map(num => {
    num * 2;
  });
  // => [undefined, undefined, undefined]
```
Here the callback returns undefined (we do not tell it what to return). `map` returns array of the same length of `undefined`.

`filter` and `map` with Strings

Finding all the vowels:

`split` to make array from strings

`filter` to select only vowels

`join` to make string from array
```javascript
  let str = "What's up, Doc?";
  str.split('')
     .filter(char => 'aeiou'.includes(char.toLowerCase()))
     .join('');
  // => 'aeo'
```

We can use `map` to duplicate every character in a string:
```javascript
  let str = "What's up, Doc?";
  str.split('')
     .map(char => char + char)
     . join('');
  // => "WWhhaatt''ss  uupp,, DDoocc??"
```

## Summery
Methods like `forEach`, `filter`, and `map` are provided by JavaScript to allow for simpler implementations of common collection manipulation tasks. Using these methods to iterate, select and transform a collection is preferred over manually looping.

Method Reference:

|**Method** | **Action** | **Considers the return value of the callback?** | **Returns a new array from the method?** | **Length of the returned array** |
|:---|:---|:---|:---|:---|
|`forEach`| Iteration | No | No, it returns `undefined` | N/A
|`filter` | Selection/Filtering | Yes, its truthiness | Yes | Length of original or less |
|`mpa`| Transformation | Yes | Yes | Length of original|

These methods each use the callback's return value in different ways. In the case of `forEach`, the return value of the callback is ignored.