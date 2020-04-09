// function func1(name, age, ...rest) {
//   console.log(name);
//   console.log(age);
//   console.log(rest);
//   console.log(arguments)
// }
// // func1('张三','17',11,55,66);

// (function (name, age, ...rest) {
//   console.log(name);
//   console.log(age);
//   console.log(rest);
//   console.log(arguments)
// })('张三', '17', 11, 55, 66);

// function func2(n) {
//   if (n === 0) return // 条件，到 0 退出
//   console.log(n)
//   func2(n - 1) // 递归 - 1
// }
// func2(10);


// function func3() {
//   var n = 1
//   n = n + 1 // 我们打算让每执行一次，n+1
//   console.log(n)
//   return n
//  }

//  func3() // 2
//  func3() // 2
//  func3() // 2

// 闭包函数
function func4() {
  let n = 0;
  return function () {
    return (n++)
  }
}

let add = func4();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


