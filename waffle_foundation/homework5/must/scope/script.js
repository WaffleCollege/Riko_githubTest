'use strict'
// Please don't delete the 'use strict' line above

// スコープ
// 問題
// 1.
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

let greeting = "Konnichiwa";
//※グローバルスコープ　＝　ファイル内のどこでもアクセス可能

function sayHello(name) {
  let greeting = "Hi";
  //※ローカルスコープ　＝　関数の中身でのみアクセス可能
  
  return greeting + " " + name;
  //ここは関数の中身である。よって、ローカルスコープでの代入がgreetingに反映され、返される。
}

console.log(sayHello("Rika")); // => "Hi Rika"


// 2.
function sumArray(arrayOfNumbers) {
  let sum = 0;
  //ここで一旦"sum"の中身を0にリセットする。

  let result;
  //forの外側かつ関数の内側に変数を宣言する。

  for (const number of arrayOfNumbers) {
    result = (sum += number);
    //forの中で実行される結果を"result"に置き換える。
  }
  return result;
  //forの中で"result"に置き換えた結果を返す。
}

test(sumArray([1, 2, 3]), 6);
test(sumArray([10, 20, 30]), 60);
test(sumArray([100, 200, 300]), 600);


// 3.
let count = 0;
/*
2. の場合は、次のtestが実行される前に現在のtestの結果を一度リセットする必要があった。
しかし、3. の場合は、カウンターとしてそれまでのカウント数も数える必要があるため、関数counterが実行される前に一度"count"を0にするだけで良い。
*/

function counter(x) {
  count = count + x;
  return count;
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);
