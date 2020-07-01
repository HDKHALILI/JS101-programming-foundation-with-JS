# Nested Data Structures

It's not uncommon for collections to contain other collections. Let's explore a few examples which illustrate how to work with nested data structures.

## **Referencing collection elements**
Here we have an array that contains two separate arrays: `[1, 3]` and `[2]`.
```javascript
  let arr = [[1, 3], [2]];
```
Each inner array has its own index even though they are both inside another array.
![nested array diagram](nested-array-diagram.png)

Each inner array can be accessed in the same way that you would access an other array element. The trick is to remember that it's another collection you are referencing.
```javascript
  arr[0]; // => [ 1, 3 ]
```
![nested inner array diagram](nested-inner-array-diagram.png)

Let's get integer `3` from the inner array:
```javascript
  // here we are chaining our element references
  arr[0][1]; // => 3
```
![nested inner array element diagram](nested-inner-array-element-diagram.png)

&nbsp;

## **Updating collection elements**

**Update array element:**
```javascript
  let arr = [[1, 3], [2]];
  // parmanently changed the value of element at index 1
  arr[1] = 'hi there';
  arr; // => [ [1, 3], 'hi there' ]
```

**Modify a value in nested array:**
```javascript
  let arr = [[1, 3], [2]]
  // changing value in nested array is the same
  arr[0][1] = 5;
  // [ [1, 5], [2] ]
```
Let's see what is happening:  
`arr[0][1] = 5` is a chained action, first part is element reference and second part is element assignment  
Element Reference: `arr[0]` which gives us: `[1, 3]`  
Element Assignment: `[1] = 5` which changed the second element of the referenced element to `5`.

**Add aditional element into an inner array:**
```javascript
  let arr = [[1], [2]];

  arr[0].push(3);
  console.log(arr);
  // => [ [1, 3], [2] ]

  // we can add any value like another array
  arr[0].push([4]);
  console.log(arr);
  // => [ [ 1, 3, [ 4 ] ], [2] ] (three layer nested data structure)
```