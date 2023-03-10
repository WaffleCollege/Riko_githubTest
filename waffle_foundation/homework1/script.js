'use strict'
// Please don't delete the 'use strict' line above

// 変数入門
// 演習問題
// 1.
const name = "Riko";
console.log(name); // => Riko

let age = 21;
console.log(age); // => 21

let isProgrammer = "true";
console.log(isProgrammer); // => true

let currentTask = "1";
console.log(currentTask); // => 1


// 2.
currentTask = "2"
console.log(currentTask); // => 2


// 3.
const squareSideLength = 2;
const squareArea = squareSideLength * squareSideLength;
console.log(squareArea); // => 4

const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangleArea); // => 12

const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = (triangleBaseLength * triangleHeightLength) / 2;
console.log(triangleArea); // => 10


// 変数のタイプ
// 1.
// 問題1
const variableNumber = 13;
console.log(typeof variableNumber);
/*
"number"と表示させるには、???に数値を代入すればいい。
※演算子typeofは、代入された値のType(型)を返す
*/

// 問題2
const variableBoolean = true;
console.log(typeof variableBoolean); // => boolean

// 問題3
const variableUndefined = undefined;
console.log(typeof variableUndefined); // => undefined


// 2.
const numberA = 11;
const numberB = 15;
const average = (numberA + numberB) / 2;
console.log(average); // => 13


// 中級演習: Lab Dayおすすめ問題
// 1.
const circleDiameter = 10;
const circleCircumference = circleDiameter * 3.14
const circleArea = (circleDiameter / 2) * (circleDiameter / 2) * 3.14
console.log(circleCircumference); // => 31.400000000000002

console.log(circleArea); // => 78.5


// 2.
let a = "B";
a = "A";
console.log(a); // => A

let b = "A";
b = "B";
console.log(b); // => B


// 任意課題
// 応用演習
// 1.
let value = 1;
console.log(value);

value = value * 2;
console.log(value);

value = 2 ** 2;
console.log(value);

value = 2 ** 3;
console.log(value);

value = 2 ** 4;
console.log(value);

value = 2 ** 5;
console.log(value);

value = 2 ** 6;
console.log(value);


// 2.
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";

console.log("Hello, my name is " + firstName + " " + lastName + ". I live in " + city + ".");


// 3.
let number;

function counter(number) {
  return number + 1;
}

console.log(counter(0));
console.log(counter(1));
console.log(counter(2));


// 4.
function isOdd(givenNumber) {
  if (givenNumber % 2 === 1) {
    console.log("Yes, it's odd.");
  } else if (givenNumber % 2 === 0) {
    console.log("No, it's even.");
  }
}

isOdd(2);
isOdd(3);
isOdd(13);
