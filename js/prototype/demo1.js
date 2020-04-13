function Person(person) {
  let params = person || {};
  this.name = params.name || '张三';
  this.age = params.age || '18';
  this.height = params.height || '175';
  this.weight = params.weight || '130';
}
Person.prototype = {
  run() {
    console.log(this.name + '正在跑')
  }
}
Person.prototype.jump = function run() {
  console.log(this.name + '正在跳')
}
Person.prototype.print = function print() {
  console.log(this);
}
let person1 = new Person();
// console.log(person1);
// person1.run();
// person1.jump();
// person1.print();
// console.log(person1)