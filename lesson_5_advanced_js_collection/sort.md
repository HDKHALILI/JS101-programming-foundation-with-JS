# Sorting

Another way to work with collections is to sort them into some predictable sequence or order. Sorting is typically performed on arrays; since items in arrays are accessed via their index, their order in the array is important.

**Strings** don't have access to any built-in sorting methods. You can convert it to array, sort it, and then build a new string from the result.

**Objects** don't maintain a set order, so there is no point in sorting them. Also you access each value by name.

&nbsp;

## **What is sorting?**
Sorting is setting the order of the items in a collection according to some criteria.  
For example: Both of the following arrays contain the same numbers, but the second one is sorted numerically from low to high.
```javascript
  [2, 11, 9, 4, 107, 21, 1]
  [1, 2, 4, 9, 11, 21, 107] // sorted numerically
```
The question is starting with the first array how can we go from that to the second array? 
We need a mechanism that we can use on the first array to put all the items of that array in a particular order, in this case numerically in ascending order.

It is possible to write sorting code manually, such code is relatively complex. JavaScript has abstracted sorting algorithm in `Array.prototype.sort` method for us.

&nbsp;

## **Sorting in JavaScript**
Comparisons are at the heart of how sorting works. Sorting algorithm must perform a comparison of some kind between the items in a collection; it uses the results of those comparisons to rearrange the order of the collection, eventually leading to the sorted result.

```javascript
  [2, 11, 9, 4, 107, 21, 1].sort();
  // => [ 1, 107, 11, 2, 21, 4, 9 ]
```
`sort` without any argument converts every item except `undefined` to `String` and then compares them by their Unicode character codes. `1` comes before `107` which comes before `11`.  

```javascript
  [null, 'a', true, 1].sort();
  // => [ 1, 'a', null, true ]
```
`undefined` values are a special case when it comes to sorting. They are always placed at the end of the array no matter what the other values are:
```javascript
  [undefined, 11, 'z', 'x', 'y', undefined].sort();
  // => [ 11, 'x', 'y', 'z', undefined, undefined ]
```

### Sorting Arrays of Strings Alphabetically
calling `sort` on an array of characters returns an array of characters, ordered alphabetically.
```javascript
  ['c', 'a', 'e', 'b', 'd'].sort();
  // [ 'a', 'b', 'c', 'd', 'e' ]
```
Strings of multiple characters:
```javascript
  ['arc', 'bat', 'cape', 'ants', 'cap'].sort();
  // => ['ants', 'arc', 'bat', 'cap', 'cape' ]
```
When working with strings that have multiple characters, `sort` compares them character by character. Strings beginning with `a` comes before `b`, if both are the same then the next character in each string is compared, and so on. If one string is shorter than another, but equal through the length of the shorter string, then the shorter string comes before the longer string. like `cap` comes before `cape`.

**Note:** `sort` is a destructive method. It doesn't return a new array; it sorts the original array in place, and return a reference to the array. So `sort` has side-effect (sorting) and returns a meaningful value (reference to sorted array) at the same time.

&nbsp;

### UTF-16
Some useful rules to remember:
- Uppercase letters come before lowecase letters (sometimes called **ASCIIbetical** order)
- Digits and most punctuation come before letters.
- There are several punctuation characters between the uppercase and lowercase leters, and several more that comes after all of the letters.
- There is an extended ASCII table that contains accented and other characters - this comes after the main ASCII table.
- All other UTF-16 characters come after the extended ASCII table and have a code point of at least 256

&nbsp;

### Generic Sorting
`sort` takes an optional callback argument. The return value of that callback determines the final sequence produced by the sort:
```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
    // you are allowed to have additional code, like console.log
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  // => [ 1, 2, 4, 9, 11, 21, 107]
```
Callback's return value meanings:  
1. If the callback returns a number less than `0`, place `a` before `b`.
2. If the callback returns a number greater than `0`, place `b` before `a`.
3. If the callback returns `0`, leave the relative positions of `a` and `b` unchanged.

We can shorten the above code:
```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);
```

Sorting in descending order:
```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  // => [ 107, 21, 11, 9, 4, 2, 1 ]
```
Or:
```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);
```

Sorting by length of each word:
```javascript
  let words = ['go', 'ahead', 'and', 'jump'];
  words.sort((a, b) => a.length - b.length);
  // => [ 'go', 'and', 'jump', 'ahead' ]
```
Sorting subarrays. Here `score` is an array subarrays that each contain 3 elements. This array represents the score of three players in a game of three rounds. We want to sort the players in ascending order of their total score.
```javascript
  let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
  scores.sort((a, b) => {
    let totalAScore = a.reduce((number, next) => number + next);
    let totalBScore = b.reduce((number, next) => number + next);

    return totalAScore - totalBScore;
  });

  // => [ [1, 4, 2], [3, 6, 4], [6, 8, 9] ]
```

**NOTE:** Using one letter parameters (`a` and `b`) in a callback for `sort` is a common convention, even though it confilicts with the style rules that says you shouldn't use singl-character variable name. In this case it is ok.