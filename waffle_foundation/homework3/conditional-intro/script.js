'use strict'
// Please don't delete the 'use strict' line above

// 条件分岐
// 基礎演習
// 1.
function simplePasswordLock(password) {
  if (password == "password") {
    return "Correct! Welcome.";
  } else {
    return "Incorrect password, please try again.";
  }
}
function simplePasswordLock(password) {
  if (password === "password") {
    return "Correct! Welcome.";
  } else if (password !== "password") {
    return "Incorrect password, please try again.";
  }
}

console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."


// 2.
console.log("Hello".length); // => 5
console.log("The length of this string is 31".length); // => 31
console.log(" spaces! ".length); // => 9


// 3.
function isItTooLong(moji) {
  if (moji.length > 10) {
    return "true";
  } else if (moji.length <= 10) {
    return "false";
  }
}
console.log(isItTooLong("This is too long")); // => true
console.log(isItTooLong("It's short")); // => false


// 4.
function biggerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    return "The first argument is bigger.";
  } else if (numOne < numTwo) {
    return "The second argument is bigger.";
  }
}
console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.'
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'


// 5.
function greeting(name, language) {
  if (language == "Japanese") {
    return "Konnichiwa" + ", " + name + "!";
  } else if (language == "English") {
    return "Hello" + ", " + name + "!";
  } else if (language == "French") {
    return "Bonjour" + ", " + name + "!";
  } else if (language == "Italian") {
    return "Ciao" + ", " + name + "!";
  }
}
console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!"
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"

console.log(greeting("Brinou", "French")); // => "Bonjour, Brinou!"
console.log(greeting("Thomas", "Italian")); // => "Ciao, Thomas!"
console.log(greeting("Thomas", "Japanese")); // => "Konnichiwa, Thomas!"


// 6.
function isEven(x) {
  if (x % 2 === 0) {
    return "true";
  } else if (x % 2 === 1) {
    return "false";
  } else {
    return "This is not a number.";
  }
}
console.log(isEven(4)); // => true
console.log(isEven(7)); // => false

console.log(isEven(13)); // => false
console.log(isEven("maneskin")); // => "This is not a number."
console.log(isEven("This is not a number, is it?")); // => "This is not a number."
