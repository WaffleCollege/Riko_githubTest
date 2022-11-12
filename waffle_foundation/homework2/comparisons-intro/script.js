'use strict'
// Please don't delete the 'use strict' line above

// 比較入門
// 1.
console.log(2 + 3 * 10 < 50); // => true


// 2.
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}
console.log(isEqual(18, "18")); // => true
/*
===は値とデータ型両方の一致を評価し、==は値の一致のみを評価する。
*/


// 3.
// ①
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}
console.log(isGreaterThan(100, 10)); // => true

// ②
console.log(isGreaterThan(1, 10)); // => false


// 4.
function isOfAge(age) {
  return age >= 20;
}
console.log(isOfAge(20)); // => true
console.log(isOfAge(21)); // => true
console.log(isOfAge(19)); // => false


// Lab Day おすすめ問題
// 1.
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2)); // => true
console.log(isEven(1)); // => false
console.log(isEven(0)); // => true


// 2.
function rightCircularCylinderVolume(radius, height) {
  return radius ** 2 * height * 3.14;
}
console.log(rightCircularCylinderVolume(5, 3)); // => 235.5

function frustumOfRightCircularConeVolume(radius1, radius2, height) {
  return ((radius1 ** 2 + radius1 * radius2 + radius2 ** 2) * height * 3.14) / 3;
}
console.log(frustumOfRightCircularConeVolume(3, 7, 8)); // => 661.4933333333333


// 3.
function validCredentials(username, password) {
  if (username.length >= 4 && password.length >=8) {
    return true;
  } else {
    return false;
  }
}
console.log(validCredentials("rikok", "wafflecollege")); // => true
/*
lengthは、文字列や配列のために用意されているプロパティ。数値には利用できない。
*/
