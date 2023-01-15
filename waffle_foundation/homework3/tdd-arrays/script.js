'use strict'
// Please don't delete the 'use strict' line above

// TDDで配列を扱う
// テストケースをすっきり書こう②
function numberOfPeople(arrayOfPeople) {
  return arrayOfPeople.length;
}

testArray(numberOfPeople(["Urara", "Tokotoko"]), 2);
testArray(numberOfPeople(["Mike", "Bassy", "Ishity", "Asumi"]), 4);
testArray(numberOfPeople([]), 0);


function testArray(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 配列＆TDD練習問題
// 1.
function hiInTheMiddle(Array1) {
  if (Array1.length % 2 === 1) {
    Array1[(Array1.length - 1) / 2] = "hi";
    return Array1;
  } else if (Array1.length % 2 === 0) {
    return Array1;
  }
}

let actual = hiInTheMiddle([1, 2, 3, 4, 5]);
let expected = [1, 2, "hi", 4, 5];
testArray(actual, expected);

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];
testArray(actual, expected);

actual = hiInTheMiddle([1, 2, 3, 4, 5, 6, 7]);
expected = [1, 2, 3, "hi", 5, 6, 7];
testArray(actual, expected);


// 2.
function pop(Array2) {
  const pop = Array2.splice((Array2.length - 1), 1);
  return pop[0];
}

let Array2 = [1, 2, 3, 4];

actual = pop(Array2);
expected = 4;
testArray(actual, expected);

actual = Array2;
expected = [1, 2, 3];
testArray(actual, expected);

Array2 = [1, 2, 3, 4, 5, 6, 7];
  
actual = pop(Array2);
expected = 7;
testArray(actual, expected);


// 3.
function unshift(Array3, firstValue) {
  Array3.splice(0, 0, firstValue);
  return Array3.length;
}

let Array3 = [1, 2, 3, 4];

actual = unshift(Array3, 5);
expected = 5;
testArray(actual, expected);


if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


actual = Array3;
expected = [5, 1, 2, 3, 4];
testArray(actual, expected);


// 4.
function shift(Array4) {
  const shift = Array4.splice(0, 1);
  return shift[0];
}

let Array4 = [1, 2, 3, 4];

actual = shift(Array4);
expected = 1;


if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}


actual = Array4;
expected = [2, 3, 4];
testArray(actual, expected)
