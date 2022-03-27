function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const person1 = new Person("Gustut", "Yoghantara");
const person2 = new Person("Krisna", "Aditya");

person1.sayHello("Ricky");
person2.sayHello("Rama");

// Menambah property ke Prototype
// __proto__
Person.prototype.sayBye = function (name) {
  console.log(`Goodbye ${name} from ${this.firstName}`);
};

Person.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};

person1.sayBye("Galang");
person2.sayBye("Yopha");
person1.run();
person2.run();
