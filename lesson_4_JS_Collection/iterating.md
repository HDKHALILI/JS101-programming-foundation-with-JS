# Iterating with for and while Loops
### Why?
When working with a collection. It's common to perform a single action on each element in the collection. Instead of writing the action over and over again, loops can be used to process many, if not all, of the elements in a collection.

For example: we want to increment each element in this array by 1.

Doing it manulay.
```javascript
  let numbers = [1, 2, 3, 4];
  numbers[0] += 1;
  numbers[1] += 1;
  numbers[2] += 1;
  numbers[3] += 1;
  console.log(numbers); // => [2, 3, 4, 5]
```

Using `while` loop:
```javascript
  let numbers = [1, 2, 3, 4];
  let idx = 0;

  while (idx < numbers.length>) {
    numbers[idx] += 1;
    idx += 1;
  }
  console.log(numbers); // => [2, 3, 4, 5]
```

## Loop Elements
Looping comprises of four primary elements:
- a looping construct such as `for` or `while`
- a counter (control variable)
- a way to retrieve a current value
- a way to exit the loop

It is important to understand how to manually loop over collections with nothing more than these 4 tools. NO METHOD HUNTING.

#### Generic Loops
In JavaScript the most basic kind of loop uses the `while` statement with a conditional expression that is always true:
```javascript
  // code within the block gets executed during each iteration
  while (true) {
    // some code here
  }
 ```

 ## Iterating Over Collections
 
 #### Strings

The loop iterates over a string and prints each character.

 ``` javascript
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0;

  // length is one number higher than the last index
  // therefore ' < alphabet.length' not '<= alphabet.length'
  while (counter < alphabet.length) {
    console.log(alphabet[counter]);
    counter += 1;
  }
 ```
Here is the above iteration using `for` loop

```javascript
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // set control variable, exit condition and update control variable on the same line
  for (let counter = 0; counter < alphabet.length; counter += 1) {
    console.log(alphabet[counter]);
  }
```
 #### Arrays

 ```javascript
  let colors = ['green', 'blue', 'purple', 'orange'];

  for (let counter = 0; counter < colors.length; counter += 1) {
    console.log(`I'm the color ${colors[counter]}`);
  }
 ```

#### Objects

Looping over objects requires a couple more steps. Since each value in the object is associated with a key, we need to get all the keys as an array. Then loop over the array and access each value.

```javascript
  let numberOfPets = {
    dogs: 2,
    cats: 4,
    fisht: 1
  };

  // Looping over object is a two step process

  // 1. extracting the keys in an array [keys]
  let pets = Object.keys(numberOfPets); // => ['dogs', 'cats', 'fish']
  let counter = 0;

  // 2. looping
  while (counter < pets.length) {
    let currentPet = pets[counter];
    let currentPetNumber = numberOfPets[currentPet];
    console.log(`I have ${currentPetNumber} ${currentPet}`);
    counter += 1;
  }
```

There is a `for/in` loop. However this loop iterates on properties that the object's own properties and as well as the properties that it inherits.

```javascript
  let numberOfPets = {
    dogs: 2,
    cats: 4,
    fish: 1
  };

  for (let currentPet in numberOfPets) {
    let currentPetNumber = numberOfPets[currentPet];
    console.log(`I have ${currentPetNumber} ${currentPet}`);
  }
```

## Loop Controles: break and continue

#### Positioning break

```javascript
  while (true) {
    let number = Math.floor(10 * Math.random());
    console.log(number);

    if (number === 5) {
      console.log('Exiting...');
      break;
    }
  }
```
The above `while` loop mimics a `do/while` loop because we have the `break` at the end. "It reads as long as the number is not 5 keep looping."

```javascript
  // the above loop mimics 'do/while' loop
  let number;
  do {
    number = Math.floor(10 * Math.random());
    console.log(number);
  } while (number !== 5);
  console.log('Exiting...');
```
If we put the `break` at the beginning of the loop, it mimics a regular `while` loop:

```javascript
  let str = '';

  while (true) {
    if (str.length >= 10) {
      break;
    }

    str += '*';
    console.log(str);
  }
```
The above loop without `break`

```javascript
  let str = '';
  
  while (str.length < 10) {
    str += '*';
    console.log(str);
  }
```

Exiting the loop from the middle instead of beginning or end

```javascript
  while (true) {
    let number = Math.floor(10 * Math.random());

    // test terminate the loop in the middle
    if (number === 5) {
      console.log('Exiting...');
      break;
    }

    // number 5 is not logged
    console.log(number);
  }
```

```javascript
  let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
  let index = 0;

  while (index < names.length) {
    // test terminates the loop at the beginning
    if (names[index][0] === 'E') {
      break;
    }

    console.log(names[index]);
    index += 1;
  }
```

NOTE: we can use the `break` statement in any `while`, `do/while` or `for` loop; you aren't restricted to using it only in `while(true)` loops
