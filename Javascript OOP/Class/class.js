class Person {
  // constructor
  constructor(name) {
    // property
    this.name = name;
  }

  // method
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const person = new Person();
console.log(person);

const person2 = new Person("Gustut");
console.log(person2);
console.log(person2.name);
person2.sayHello();

// juga memiliki prototype
// Person.prototype.sayHello = () => {
//     console.log("Hello")
// };
