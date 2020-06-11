// JavaScript's strings aren't really a collection since you can store generic
// data in them. You can think of it as a collection of characters; they have
// properties that one would associate with collections.
// For example you can access individual characters or multiple characters
// of the string and can loop through all characters by using the 'length'
// property in conjunction with the 'for' and 'while' loops.

// Methods

// String.prototype.concat
// joins two strings line the + operator.
'Hello '.concat('World!'); // => 'Hello World!'
// Remember any operation on string returns a new string, because strings
// are immutable.

// concat can take more than one string as arguments. It combines all those
// strings into one.
'Hello'.concat(' ', 'World!'); // => 'Hello World!'

// ----------------
// String.prototype.includes
// is called on a string.
// takes a string as argument
// returns a boolean showing if the argument string exists in the caller
'Eeny, meeny, miny, moe'.includes('miny'); // => true
'Eeny, meeny, miny, moe'.includes('joe'); // => false
'abc'.includes('c'); // => true

// includes also takes an optional second argument that specifies which index
// in the string to start looking for the substring
// starts looking from index 2
'abcdefg'.includes('b', 2); // => false

// ---------------
// String.prototype.split
// seperates a give (caller) string into multiple strings and returns them in
// the form of an array. How string gets split depends on the argument given.

// no argument: the whole string is returned as the first element of array
'abcdefg'.split(); // => ['abcdefg']

// empty string ('') as argument: each character of the string will be split
// into individual character
'abcdefg'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// will be split based on ', ' (comma + space)
'Eeny, meeny, miny, moe'.split(', '); // => ['Eeny', 'meeny', 'miny', 'moe']

// ----------------
// String.prototype.trim
// removes whitespace from both end of the string.
'   abcdef     '.trim(); // => 'abcdef'

// also removed white space characters like \n and \t.
'\nabcdef\t'.trim(); // => 'abcdef'

// There are 2 other variations of trim() method.
// String.prototype.trimStart()
// removes whitespace from start
'  abcdef  '.trimStart(); // => 'abcdef  '

// String.prototype.timeEnd()
'  abcdef  '.trimEnd(); // => '  abcdef'

// -------------
// toUpperCase and toLowerCase
'pete'.toUpperCase(); // => 'PETE'
'PETE'.toLowerCase(); // => 'pete'

// There is no capitalise method in JavaScript's standard libray
// Here is one way to capitalise using 'toUpperCase' and 'slice' method
function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalise('pete'); // => 'Pete'

// ---------------
// String.prototype.charAt
// takes an index as argument and returns the character at that index
// in the given string - works like bracket noation on string
let sentence = "It's a walk in the park.";
sentence.charAt(5); // => 'a'
// NOTE: for out of bound index:
//  charAt() => '' (empty string)
// [] => undefined

// -----------------
// String.prototype.charCodeAt()
// takes an index as it argument and return
// 'Unicode code point or character code' of the character at that index.
// default argument is 0
// A Unicode code point is the number that represents a given character
// at the machine level.
'abcdef'.charCodeAt(1); // => 98 (unicode point for 'b' is 98)

// ----------
// String.fromCharCode();
// takes Unicode code point as argument and returns the character
// represented by that character point
String.fromCharCode(97); // => 'a'
