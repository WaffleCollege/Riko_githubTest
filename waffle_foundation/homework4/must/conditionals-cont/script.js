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

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(22);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 2.
function isTeenager(age) {
  if (typeof age === "number") {
    if (age > 12 && age < 20) {
      return true;
    } else {
      return false;
    }
  } else if (typeof age !== "number") {
    return "Invalid! Age is not a number!"
  }
}

actual = isTeenager("Hello!");
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 3.
function anotherGreeting(name, politeGreeting, helloOrGoodbye) {
  if (politeGreeting === true) {
    if (helloOrGoodbye === true) {
      return "Hello, " + name + "-san.";
    } else if (helloOrGoodbye === false) {
      return "Goodbye, " + name + "-san.";
    } 
  } else if (politeGreeting === false) {
    if (helloOrGoodbye === true) {
      return "Hello, " + name + "!";
    } else if (helloOrGoodbye === false) {
      return "Goodbye, " + name + "!";
    }
  }
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 中級演習
// 1.
function anotherGreeting(name, politeGreeting, helloOrGoodbye) {
  if (typeof name === "string" && typeof politeGreeting === "boolean" && typeof helloOrGoodbye === "boolean") {
    if (politeGreeting === true) {
      if (helloOrGoodbye === true) {
        return "Hello, " + name + "-san.";
      } else if (helloOrGoodbye === false) {
        return "Goodbye, " + name + "-san.";
      } 
    } else if (politeGreeting === false) {
      if (helloOrGoodbye === true) {
        return "Hello, " + name + "!";
      } else if (helloOrGoodbye === false) {
        return "Goodbye, " + name + "!";
      }
    }
  } else if (typeof name !== "string" || typeof politeGreeting !== "boolean" || typeof helloOrGoodbye !== "boolean") {
    return "無効なインプットです！";
  }
}

actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting(1, 2, 3);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 2.
function getLetterGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score <= 59) {
    return "F";
  }
}

actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(89);
expected = "B";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(75);
expected = "C";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 3.
function getLetterGrade(score) {
  if (score >= 0 && score <= 100) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else if (score <= 59) {
      return "F";
    }
  } else if (score < 0 || score > 100) {
    return "無効な点数です。";
  }
}

actual = getLetterGrade(-13);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(1000);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(-100);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 4.
function getBestNumericalGrade(grade) {
  if (grade === "A") {
    return 100;
  } else if (grade === "B") {
    return 89;
  } else if (grade === "C") {
    return 79;
  } else if (grade === "D") {
    return 69;
  } else if (grade === "F") {
    return 59;
  }
}

actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("C");
expected = 79;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 5.
function getBestNumericalGrade(grade) {
  if (grade === "A" || grade === "B" || grade === "C" || grade === "D" || grade === "F") {
    if (grade === "A") {
      return 100;
    } else if (grade === "B") {
      return 89;
    } else if (grade === "C") {
      return 79;
    } else if (grade === "D") {
      return 69;
    } else if (grade === "F") {
      return 59;
    }
  } else if (grade !== "A" || grade !== "B" || grade !== "C" || grade !== "D" || grade !== "F") {
    return "無効な点数です。";
  }
}

actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("100");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("Waffle College");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
