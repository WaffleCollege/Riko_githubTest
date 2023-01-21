'use strict'
// Please don't delete the 'use strict' line above

// for..ofループ
// 基礎演習
// 1.
let actual;
let expected;

function sumArray(Array) {
  let number = 0;
  
  for (const num of Array) {
    number += num;
  }

  return number;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;
test(actual, expected);

actual = sumArray([13, 14, 15, 16]);
expected = 58;
test(actual, expected);

actual = sumArray([1, 2, 3, 4, 5, 6, 7]);
expected = 28;
test(actual, expected);


function test(actual, expected) { 
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}


// 2.
function productArray(Array) {
  let number = 1;

  for (const num of Array) {
    number *= num;
  }

  return number;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;
test(actual, expected);

actual = productArray([2, 4, 6, 8]);
expected = 384;
test(actual, expected);

actual = productArray([1, 3, 5, 7, 11]);
expected = 1155;
test(actual, expected);


function test(actual, expected) { 
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}


// 3.
function hasFun(Array) {
  for (const element of Array) {
    if (element === "fun") {
      return true;
    }
  }

  return false;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;
test(actual, expected);

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;
test(actual, expected);


function test(actual, expected) { 
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}


// 4.
function containsOnlyBooleans(Array) {
  for (const element of Array) {
    if (typeof element !== "boolean") {
      return false;
    }
  }

  return true;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// 5.
function concatenate(Array1, Array2) {
  const Array = [];
  
  for (const element of Array1) {
    Array.push(element);
  }
  for (const element of Array2) {
    Array.push(element);
  }

  return Array;
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}  

actual = concatenate(["Damiano", "Victoria"], ["Thomas", "Ethan"]);
expected = ["Damiano", "Victoria", "Thomas", "Ethan"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}  


// 6.
function getEvenNumbers(Array) {
  const Array6 = [];
  
  for (const element of Array) {
    if (element % 2 === 0) {
      Array6.push(element);
    }
  }

  return Array6;
}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getEvenNumbers([2, 5, 8, 3, 5, 9, 2, 6]);
expected = [2, 8, 2, 6];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// 7.
function getMultipliedArray(Array, Number) {
  //初期化する。
  const Array7 = [];

  //forを使いArrayのelementをひとつずつ見て、そのelementに第2引数をかけていく。そして、この結果を新しい配列のArray7にpushする。
    for (const element of Array) {
    Array7.push(element * Number);
  }

  //その結果をpushされたArray7を返す。
  return Array7;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getMultipliedArray([2, 3, 5], 7);
expected = [14, 21, 35];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// 中級演習
// 1.
function isSorted(Array) {
  for (const element of Array) {  
    //今見ているelementのindex番号をnumberとする。
    const number = Array.indexOf(element);
    
    //今見ているindex番号numberのelementが1つ後のindex番号のelementより大きければ、falseを返す。
    if (Array[number] > Array[number + 1]) {
      return false;
    }
    
  return true;
  }
}

actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isSorted([6, 4, 9, 2, 0]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// 2.
function countOccurrences(Array, dataType) {
  let number = 0;

  for (const element of Array) {
    if (element === dataType) {
      number = number + 1;
    } else if (element !== dataType) {
      number = number + 0;
    }
  }

  return number;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// 3.
function getOperatedArray(Array, Operator, Number) {
  //初期化する。
  const Array3 = [];

  //forを使いArrayのelementをひとつずつ見て、それぞれのOperatorの場合に行うelementを含んだ計算式を、新しい配列のArray3にpushする。
    for (const element of Array) {
      if (Operator === "+") {
        Array3.push(element + Number);
      } else if (Operator === "-") {
        Array3.push(element - Number);
      } else if (Operator === "*") {
        Array3.push(element * Number); 
      } else if (Operator === "/") {
        Array3.push(element / Number);
      } else if (Operator === "**") {
        Array3.push(element ** Number);
      } else if (Operator === "%") {
        Array3.push(element % Number);
      }
    }

  //その結果をpushされたArray3を返す。
  return Array3; 
}

actual = getOperatedArray([1, 2, 3], "+", 5);
expected = [6, 7, 8];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getOperatedArray([6, 3, 0, 1], "**", 2);
expected = [36, 9, 0, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
