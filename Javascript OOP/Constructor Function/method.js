function Person() {
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.info(`Hello ${name}, good morning, my name is ${this.firstName}`);
  };
}

const person1 = new Person();
person1.firstName = "Gustut";
person1.lastName = "Yoghantara";
person1.sayHello("Ricky");
