'use strict'
// Please don't delete the 'use strict' line above

// ここまでのまとめ問題
// 1.
let actual;
let expected;
/*
ファイルの先頭でactualとexpectedの変数（ハコ）を宣言する。
ここで"let"を書いておくことで、その後の各問題でletと書く必要がなくなる。各関数の最初のテストでletと書くのもアリ。
*/

function isLongerThan(string, number) {
  if (string.length > number) {
    return true;
  } else if (string.length <= number) {
    return false;
  } else {
    return "Invalid input.";
  }
}

actual = isLongerThan("three", 3);
expected = true;
test(actual, expected);

actual = isLongerThan("three", 5);
expected = false;
test(actual, expected);

actual = isLongerThan(3, 5);
expected = "Invalid input.";
test(actual, expected);


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 2.
function isOddWithoutIf(number) {
  return number % 2 === 1 && typeof(number) !== number;
}

actual = isOddWithoutIf(3);
expected = true;
test(actual, expected);

actual = isOddWithoutIf(4);
expected = false;
test(actual, expected);


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 3.
function getSimpleNumberName(num) {
  const number =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
  return number[num];
}

actual = getSimpleNumberName(0);
expected = "zero";
test(actual, expected);

actual = getSimpleNumberName(7);
expected = "seven";
test(actual, expected);


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 4.
function getRegularConvexPolygonName(sides) {
  const englishNameOfPolygon = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"]
  return englishNameOfPolygon[sides - 3];
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";
test(actual, expected)

actual = getRegularConvexPolygonName(5);
expected = "pentagon";
test(actual, expected)


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 予め用意された関数を使ってみよう
// 1.
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

actual = randomNumber(13);
expected = 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12;
test(actual, expected);

actual = randomNumber(3);
expected = 0 || 1 || 2;
test(actual, expected);


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 2.
function guessMyNumber(num1, num2, num3) {
  num1 = Math.ceil(num1);
  num2 = Math.floor(num2);
  if (num3 === (Math.floor(Math.random() * (num2 - num1) + num1))) {
    return "YES!";
  } else {
    return "NO!";
  }
}

actual = guessMyNumber(0, 6, 3);
expected = "YES!" || "NO!";
test(actual, expected);

actual = guessMyNumber(0, 6, 10);
expected = "NO!";
test(actual, expected);


function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}
