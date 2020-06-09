//作用域

// var n = 1

// console.log(n);  

// (function () {
//   n = 2;
// })()

// console.log(n)

// let
// ES6 新增的变量关键词，和 var 最大的区别是 let 具备块级作用域。
// 读取不到，而如果使用的是 var 这里可以就读取得到
for (let i = 0; i < 1; i++) {
  let num1 = 1;
  var num2 = 2;
}
console.log(num2);
console.log(num1);
