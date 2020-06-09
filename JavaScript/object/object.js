// let p = {
//   name: '张三',
//   age: '18',
//   height: '175',
//   weight: '120',
// }
// console.log('name' in p);
// delete p.name
// console.log('name' in p);

// console.log(Object.keys(p));
// console.log(Object.values(p));
// let p1 = Object.assign({}, p, { age: 19 });
// console.log(p1)
// p1.weight = 130;
// console.log(p);
// dir(Object);

// getter setter
let person = {
  firstName: '张',
  lastName: '三',
  age: 25,
  fullName: function () {
    return this.firstName + this.lastName
  },
  get fullName1() {
    return this.firstName + this.lastName
  }
}
console.log(person.fullName);
console.log(person.fullName());
console.log(person.fullName1);
