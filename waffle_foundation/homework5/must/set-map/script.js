'use strict'
// Please don't delete the 'use strict' line above

// MapとSet
// 問題1
const colors = new Array("赤", "白", "黄", "赤", "青", "赤", "赤", "青", "黄", "青");
const color_map = new Map();

for (const color of colors) {
  if (color_map.has(color)) {
    color_map.set(color, color_map.get(color) + 1);
  } else {
    color_map.set(color, 1);
  }
}

console.log(color_map.get("赤") === 4);
console.log(color_map.get("白") === 1);
console.log(color_map.get("黄") === 2);
console.log(color_map.get("青") === 3);


// 問題2
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  
console.log(getRandomInt(0, 10))
  
// オリジナルおみくじ
function getOmikuji() {
  const kuji = ["大吉", "中吉", "小吉", "吉", "凶"];
  const ramdom = kuji[Math.floor(Math.random() * kuji.length)];
  return ramdom;
}

console.log(getOmikuji())
