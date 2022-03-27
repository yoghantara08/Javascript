class Employee {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, umur) {
    super(name);
    this.umur = umur;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const employee = new Employee("Yoghantara");
const manager = new Manager("Gustut", 20);

console.log(manager.name);
console.log(manager.umur);
manager.sayHello(employee.name);
