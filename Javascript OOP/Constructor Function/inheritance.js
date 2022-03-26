function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, saya ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

const gustut = new Manager("Gustut", "Yoghantara");
console.log(gustut);
gustut.sayHello("Employee");
