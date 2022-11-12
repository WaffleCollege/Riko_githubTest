'use strict'
// Please don't delete the 'use strict' line above

// 関数入門
// 問題
// 1.
function add(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(add(4, 3)); // => 7

console.log(add(100, 42)); // => 142


// 2.
console.log(add(100)); // => NaN

console.log(add(1, 4, 5)); // => 5


// 3.
function simpleFunctionA() {
  return "Hello simple function A";
}
function simpleFunctionB() {
  console.log("Hello simple function B");
}
console.log(simpleFunctionA(), "--> From running Simple Function A"); // => Hello simple function A --> From running Simple Function A

console.log(simpleFunctionB(), "--> From running Simple Function B"); // => Hello simple function B
/*
'--> From running Simple Function B'はundefinedとなる
*/

/*
return => "返す", console => Google Chromeのconsoleの部分に"表示する"の意味

関数『function simpleFunctionA()』の解説
初めに、関数 simpleFunctionA()の中身でreturnで文字列の返り値"Hello simple function A"を返している。そして、console.logではまず関数 simpleFunctionA()を呼び出し、その後に文字列"--> From running Simple Function A"をconsoleに表示する、としている。
そのため、関数 simpleFunctionA()では　Hello simple function A --> From running Simple Function A　と表示される。

関数『function simpleFunctionB()』の解説
関数 simpleFunctionB()の中身ではreturnで何の返り値も返しておらず、ただconsoleで文字列"Hello simple function B"を表示する、とだけしている。
そのため、関数 simpleFunctionB()では　Hello simple function B　とだけ表示され、文字列"--> From running Simple Function B"はconsoleに表示されずにundefinedとなる。
*/


// 4.
function average(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(average(4, 6)); // => 5

console.log(average(100, 42)); // => 71

console.log(average(75,89)); // => 82


// 1.
function square(num1) {
  return num1 * num1;
}
console.log(square(5)); // => 25
/*
仮引数と関数の中身、returnの後ろの部分に直接数値を入れているのが誤り。

※Identifier (識別子)
　識別子 (identifier) は 変数、関数、プロパティ などを識別するコード内の文字の並びです。
　JavaScript においては、識別子は大文字小文字の区別があり、Unicode の文字、 $、 _、 数字 (0-9) を含めることができますが、数字で始めることはできません。
　識別子は文字列とは異なり、文字列がデータであるのに対して、識別子はコードの一部です。 JavaScript において、識別子を文字列に変換する方法はありませんが、ときに文字列を識別子に解釈することは可能です。
*/

function square(x) {
  return x * x;
}
console.log(square(13)); // => 169
/*
仮引数と関数の中身、returnの後ろの部分に直接文字列を入れているのが誤り。
*/

function Square(monkey) {
  return monkey ** 2;
}
console.log(Square(5)); // => 25


// 1.
function cube(x) {
  return x ** 3;
}
console.log(cube(5)); // => 125


// 2.
function waffleMaker(topping) {
  return topping + " " + "Waffle";
}
console.log(waffleMaker("Apple")); // => Apple Waffle

console.log(waffleMaker("Honey")); // => Honey Waffle


// 3.
function Circle(radius){
  return radius ** 2 * 3.14;
}
console.log(Circle(5)); // => 78.5


// 理解度チェック
// 1.
/*
関数を実行するとき、仮引数より実引数が少ない場合は、NaNと表示される。
仮引数より実引数が多い場合は、1つ目の実引数から順に仮引数と同じ数の実引数が反映され、その結果が返される。
*/


// 2.
/*
return キーワードは、関数の中身を返す。関数の外側で使うことはできない。
*/
