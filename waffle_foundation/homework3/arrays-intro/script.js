'use strict'
// Please don't delete the 'use strict' line above

// 配列
// 1.
function numberOfPeople(arrayOfPeople) {
  return arrayOfPeople.length;
}
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4


// 1.
const students = ["Damiano", "Victoria", "Thomas", "Ethan", "John"]

function numberOfPeople(students) {
  return students.length;
}
console.log(numberOfPeople(students)); // => 5


// 2.
students.push("Paul", "George", "Ringo");

console.log(numberOfPeople(students)); // => 8


// 3.
function last(array) {
  return array[array.length - 1];
}

console.log(last(["Damiano", "Victoria", "Thomas", "Ethan"])); // => Ethan
/*
与えられた配列の最後の要素を返すことはできているが、このコードが適切かどうかは分からない。
lengthは配列の要素を1からカウントし、indexは配列の要素を0からカウントするため、"length - 1"と書くことでindexのカウントに対応させることが可能となる。
※授業スライド「配列入門」6,21枚目
*/


// 4.
function push(array, lastValue) {
  array[array.length] = lastValue;
  return array.length;
}
/*
配列の要素にアクセスする際の目印となるindexは配列の要素を0からカウントするため、配列の最後に新しく追加された値を指定する際には、".length - 1"ではなく、".length"と書く必要がある。
ここでは、関数pushの2つ目の引数が配列の最後に新しく追加された値になるため、これらを"="で結ぶ。
*/

let array = [1, 2, 3, 4];

console.log(push(array, 5)); // => 5
console.log(push(array, 10)); // => 10

console.log(array); // => [1, 2, 3, 4, 5, 10];


//※.pushメゾットを使った場合の解き方
let arrayPush = [1, 2, 3, 4];

function push(arrayPush, value) {
  arrayPush.length;
  arrayPush.push(value);
  return arrayPush[arrayPush.length - 1];
}

console.log(push(arrayPush, 5)); // => 5
console.log(push(arrayPush, 10)); // => 10

console.log(arrayPush); // => [1, 2, 3, 4, 5, 10];
