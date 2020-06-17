# Array Methods
Using loops like `for` and `while` to iterate over a collection is repetitive. JavaScript provides an easier way to work with arrays through the built-in methods. We will look at `forEach`, `filter`, and `map` methods.

Unfortunately, other collections and *collection-like* types like an object and strings don't have these methods. But we can convert them to arrays and then use these methods.

**`Array.prototype.forEach`**

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
`forEach` takes a **callback** function as an argument. At each iteration it passes the current value to the callback function as the first argument. It also passes index position as the second argument and we can capture it like this: (the callback doesn't have to use those arguments if it doesn't need them)

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

