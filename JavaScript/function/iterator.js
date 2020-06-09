function iter1(array) {
  let index = 0;
  return {
    next: function () {
      return index < array.length ? { value: array[index++], done: false } : { done: true }
    }
  }
}
let arr1 = [];
for (let i = 0; i < 5; i++) {
  arr1.push(i);
}
let it1 = iter1(arr1);
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())

function* genr1() {
  yield 1;
  yield 2;
  yield 4;
  yield 3;
  yield 8;
  yield 1;  
}
let gt1 = genr1();
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
console.log(gt1.next());
