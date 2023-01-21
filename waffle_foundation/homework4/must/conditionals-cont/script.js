'use strict'
// Please don't delete the 'use strict' line above

// 演習
// 問題
// 1.
let actual;
let expected;

function isTeenager(age) {
  if (age > 12 && age < 20) {
    return true;
  } else {
    return false;
  }
} 

actual = isTeenager(3);
expected = false;
test(actual, expected);

actual = isTeenager(14);
expected = true;
test(actual, expected);

actual = isTeenager(22);
expected = false;
test(actual, expected);


function test(actual, expected) { 
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual:", actual);
    console.log("  expected:", expected);
  }
}


// 2.
typeOf
