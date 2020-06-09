/* 例 1. */
var Obj = {
  n: 1,
  f: function () {
    return this.n // f 函数 在 Obj 的作用域下执行，所以 this 代表了 Obj，this.n = Obj.n
  }
}

n = Obj.f()
console.log(n)


/* 例 2. */
var Obj = {
  n: 1,
  f: function () {
    return (
      () => {
        return this.n
      })()
  } // 嵌套多层函数会导致 this 失效
}

n = Obj.f()
console.log(n) // undefined


/* 例 3. */
var Obj = {
  n: 1,
  f: function () { return (() => this.n)() }
}
n = Obj.f()
console.log(n) // 1