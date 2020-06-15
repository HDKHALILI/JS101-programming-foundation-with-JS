# Selection and Transformation
Besides *iteration*, the two most common actions to perform on a collection are **selection** and **transformation**.

## Selection:
  - is picking some elements out of a collection based on one or more criterion.
    - Example: picking out all odd numbers from an array
  - If there are *N* elements in a collection, selection results in *N* or fewer elements.

## Transformation:
  - refers to manipulating every element in the collection.
    - Example: increment all elements of an array by 1
  - If there are *N* elements in a collection, transformation always results in the same number, *N*, elements.

Using these two actions, we can do nearly anything you can imagin to a collection. Therefore, it is critical to not only understand how to perform these actions, but also to develop a high level of proficiency so you can quickly and fluently work with collection.

Selection and Transformation both use the basics of looping: a loop, a counter, a way to retrieve the current value, and a way to exit the loop. Also, they require *criteria* that determine the results. Selection needs criteria to determine which elements to select. Transformation needs criteria to determine the transformation.

## Using Loops to Select and Transform

Selection: Let's select all the `1`s from an array.

```javascript
  let numbers = [1, 3, 9, 11, 1, 4, 1];
  let ones = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];

    // selection cirterion
    if (currentNum === 1) {
      ones.push(currentNum);
    }
  }
```

Transformation: append `s` to each string in the array.

```javascript
  let fruits = ['apple', 'banana', 'pear'];
  let transformedElements = [];
  let counter = 0;

  while (counter < fruits.length) {
    let currentElement = fruits[counter];

    // transformation criterion
    transformedElements.push(currentElement + 's');
    counter += 1;
  }
```

We write the transformed values to a new array - not mutating the original array.
**When performing a transformation, it's always important to pay attention to whether the original collection is mutated or if a new collection is returned.**

## Extracting to Functions

Select Vowels:

```javascript
  function selectVowels(str) {
    let selectedChars = '';

    for (let counter = 0; counter < str.length; counter += 1) {
      let currentChar = str[counter];

      if ('aeiousAEIOU'.includes(currentChar)) {
        selectedChars += currentChar;
      }
    }

    // returning a new string - arguments is left unchanged
    return selectedChars;
  }

  selectVowels('the quick brown fox');     // => 'euioo'

  let sentence = 'I wandered lonely as a cloud';
  selectVowels(sentence);                  // => 'Iaeeoeaaou'
  sentence;                                // => 'I wandered lonely as a cloud'

  // We can chain method because of the returned value.
  let numberOfVowels = selectVowels('hello world').length; // => 3
```

Select key-value pair where value is `'Fruit'`:

```javascript
  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  function selectFruit(produceList) {
    let produceKeys = Object.keys(produceList);
    let fruits = {};

    for (let index = 0; index < produceKeys.length; index += 1) {
      let currentKey = produceKeys[index];
      let currentValue = produceList[currentKey];

      if (currentValue === 'Fruit') {
        fruits[currentKey] = currentValue;
      }
    }

    return fruits;
  }
```

Multiply each element in an array by 2:
```javascript
  // doesn't mutate it argument
  function doubledNumbers(numbers) {
    let doubledNumbers = [];

    for (let index = 0; index < numbers.length; index += 1) {
      let currentNum = numbers[index];
      doubledNumbers.push(currentNum * 2);
    }

    return doubledNumbers;
  }

  let myNumbers = [1, 4, 3, 7, 2, 6];
  console.log(doubledNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
  console.log(myNumbers); // => [1, 4, 3, 7, 6]
```

```javascript
  // does mutate its argument
  function doubleNumbers(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
      numbers[index] *= 2;
    }
  }

  let myNumbers = [1, 4, 3, 7, 2, 6];
  doubleNumbers(myNumbers);
  console.log(myNumbers); // => [2, 8, 6, 14, 4, 12]
```

Transform only odd numbers. We still call it array transformation, it is just that the transformation left some elements unchanged. Even if we don't change any elements because none met our criterion (being odd in this case), it is still array transformation - sometimes, that is called an **identity transformation**.

```javascript
  // doesn't mutate its argument
  function doubledOddNumbers(numbers) {
    let doubledNumbers = [];

    for (let index = 0; index < numbers.length; index += 1) {
      let currentNum = numbers[index];
      
      if (currentNum % 2 === 1) {
        doubledNumbers.push(currentNum * 2);
      } else {
        doubledNumbers.push(currentNum);
      }
    }

    return doubledNumbers;
  }

  let myNumbers = [1, 4, 3, 7, 2, 6];
  console.log(doubledOddNumbers(myNumbers)); // => [2, 4, 6, 14, 2, 6]
```

## More Flexible Functions
We can make our functions more flexible and generic by passing additional arguments to alter the logic of iteration.

```javascript
  function selectType(produceList, selectionCriterion) {
    let produceKeys = Object.keys(produceList);
    let selectedItems = {};

    for (let counter = 0; counter < produceKeys.length; counter += 1) {
      let currentKey = produceKeys[counter];
      let currentValue = produceList[currentKey];

      if (currentValue === selectionCriterion) {
        selectedItems[currentKey] = currentValue;
      }
    }

    return selectedItems;
  }

  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  console.log(selectType(produce, 'Fruit')); // => { apple: 'Fruit', pear: 'Fruit' }
  console.log(selectType(produce, 'Vegetable')); // => { carrot: 'Vegetable', broccoli: 'Vegetable' }
  console.log(selectType(produce, 'Meat')); // => {}
```

```javascript
  function multiply(numbers, multiplier) {
    let multiplied = [];
    
    for (let index = 0; index < numbers.length; index += 1) {
      let currentNum = numbers[index];
      multiplied.push(currentNum * multiplier);
    }

    return multiplied
  }

  let myNumbers = [1, 4, 3, 7, 2, 6];
  console.log(multiply(myNumbers, 3));
```