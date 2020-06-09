class Animal {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  detail() {
    console.log(`${this.name},现在${this.age}岁,身高是${this.height}cm,体重是${this.weight}kg.`);
  }
  run() {
    console.log(this.name + '正在跑')
  }
  jump() {
    console.log(this.name + '正在跳')
  }
}
let cat = new Animal('小猫', 2, 30, 10);
// console.log(cat);
// cat.detail();
// cat.run();
// cat.jump();

class Dog extends Animal {
  constructor(name, age, height, weight) {
    super(name, age, height, weight);
  }
  detail() {
    console.log(`狗的名字叫${this.name},现在${this.age}岁,身高是${this.height}cm,体重是${this.weight}kg.`);
  }
  run() {
    console.log(`狗的名字叫${this.name},它正在跑`)
  }
  jump() {
    console.log(`狗的名字叫${this.name},它正在跳`)
  }
}
let dog = new Dog('大黑', 2, 80, 25);
console.log(dog);
dog.detail();
dog.run();
dog.jump();
