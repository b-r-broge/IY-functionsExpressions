// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b){
  if ( a >= b) {
      return a;
    } else {
      return b;
    }
}
// console.log(max(5,10));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

// function maxOfThree(a, b, c){
//   var alpha = max(a, b);
//   return max(alpha, c);
// }

function maxOfThree(a, b, c) {
  if (a >= b && a >=c) {
    return a;
  } else if (b >= a && b >=c) {
    return b;
  } else {
    return c;
  }
}
// console.log(maxOfThree(10, 50, -2));
// console.log(maxOfThree(10, 50, 73));
// console.log(maxOfThree(5, 5, 5));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(char) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel('a'));
console.log(isVowel('c'));
console.log(isVowel('y'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum (a, b) {
  return a+b;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function ave(a, b, c) {
  let max = a + b + c
  return max/3
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(str) {
  return str.length;
}

console.log("a");
console.log("a string");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a, b) {
  if (b > a) {
    return true
  }
  return false
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
  return "Hello, " + name + "!";
}

// console.log(greet("Phrank"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib() {
  var args = [].slice.call(arguments);
  // console.log(args);
  var sentence = "The Iron Yard has been a really great experince so far.  " +
  "The instrucors and assistants are informative, the other students are intelligent and kind " +
  "and the support staff is amazing!  I wish I had come to an Iron Yard class sooner!";

  var arr = sentence.split(" ")
  for (var i = 0; i < args.length; i++) {
    let place = Math.floor(Math.random() * arr.length);
    arr.splice(place, 0, args[i]);
  }
  var out = "";
  for (var i = 0; i < arr.length; i++) {
    out += arr[i] + " "
  }
  return out;
}

// var out = madlib("there", "farm house", "orange", "coolaid", "Phred");
// console.log(out);
