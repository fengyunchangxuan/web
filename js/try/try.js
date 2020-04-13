// try {
//   b = a + 1;
// } catch (error) {
//   console.log(error);
//   console.log(error instanceof Error) // true
//   console.log(error instanceof ReferenceError) // true | 引用错误
//   console.log(error instanceof SyntaxError) // false | 语法错误

//   /* 
//   所有错误类型都是 Error 的派生类
//   Error
//    +-- SyntaxError
//    +-- ReferenceError
//    +-- RangeError
//    +-- TypeError
//    +-- URIError
//    +-- EvalError
//   */
// } finally {
//   console.log('出错了')
// }

// try {
//   throw new TypeError('1') // 抛出一个类型错误
// } catch (e) {
//   console.log(e) // 捕获 | TypeError: 1
// } 

// 异步与错误
// catch 没办法捕获到异步执行抛出的错误。

try {
 setTimeout(() => {
  throw new Error('1')
 }, 1000)
} catch (e) {
  console.log(e)
 // 无法捕获 new Error('1')
}