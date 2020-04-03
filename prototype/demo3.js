function Person(person) {
  let params = person || {};
  this.name = params.name || '张三';
  this.age = params.age || '18';
  this.height = params.height || '175';
  this.weight = params.weight || '130';
}
let p = new Person({
  name: '李四',
})
// console.log(p)
// console.log(p.__proto__);
// console.log(p.__proto__);
// console.log(p.__proto__.__proto__);
// console.log(Person.prototype.__proto__);
// console.log(Object.prototype);
// console.log(Person.__proto__ === Object.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Person.prototype.__proto__.__proto__ === Object.prototype.__proto__);
// console.log(Person.prototype);
// console.log(Person.__proto__);
// console.log(Object.__proto__);

/**
 * 重点
 */
//实例的__proto__(隐式原型)指向类的prototype(显式原型)
//类的prototype(显式原型)的__proto__(隐式原型)指向Object的prototype(显式原型)
//Object的__proto__(隐式原型)为null

// p.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype

console.log(p.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
//重点 end
// console.log(Person.prototype)
// console.log(Object.prototype)
// console.log(Person.__proto__ === Object.__proto__);
// console.log(Person.__proto__);
// console.log(Object.__proto__);
// console.log(Person.__proto__ === Object.__proto__)

// console.log(Person.prototype);
// console.log(Object.prototype);
// console.log(Person.__proto__ === Object.__proto__)





