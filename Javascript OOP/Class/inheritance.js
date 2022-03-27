class Employee {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name) {
    super();
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const employee = new Employee("Yoghantara");
const manager = new Manager("Gustut");

console.log(manager.name);
manager.sayHello(employee.name);
