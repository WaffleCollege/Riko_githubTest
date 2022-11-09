'use strict'
// Please don't delete the 'use strict' line above

// 演習問題
// 1.
const name = "Riko";
console.log(name);
/*
Rikoと表示される
*/

let age = 21;
console.log(age);
/*
21と表示される
*/

let isProgrammer = "true";
console.log(isProgrammer);
/*
trueと表示される
*/

let currentTask = "1";
console.log(currentTask);
/*
1と表示される
*/

// 2.
currentTask = "2"
console.log(currentTask);
/*
2と表示される
*/

// 3.
const squareSideLength = 2;
const squareArea = squareSideLength * squareSideLength;
console.log(squareArea);
/*
4と表示される
*/

const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangleArea);
/*
12と表示される
*/

const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = (triangleBaseLength * triangleHeightLength) / 2;
console.log(triangleArea);
/*
10と表示される
*/

// 変数のタイプ
// 1.
// 問題1
const variableNumber = 13;
console.log(typeof variableNumber);
/*
"number"と表示させるには、???に数値を代入すればいい
※演算子typeofは、代入された値のType(型)を返す
*/

// 問題2
const variableBoolean = true;
console.log(typeof variableBoolean);
/*
booleanと表示される
*/

// 問題3
const variableUndefined = undefined;
console.log(typeof variableUndefined);
/*
undefinedと表示される
*/

// 2.
const numberA = 11;
const numberB = 15;
const average = (numberA + numberB) / 2;
console.log(average);
/*
13と表示される
*/

//中級演習: Lab Dayおすすめ問題
// 1.
const circleDiameter = 10;
const circleCircumference = circleDiameter * 3.14
const circleArea = (circleDiameter / 2) * (circleDiameter / 2) * 3.14
console.log(circleCircumference);
/*
31.400000000000002と表示される
*/

console.log(circleArea);
/*
78.5と表示される
*/

// 2.
let a = "B";
a = "A";
console.log(a);
/*
Aと表示される
*/

let b = "A";
b = "B";
console.log(b);
/*
Bと表示される
*/
