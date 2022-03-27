// Parent
class Employee {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is employee ${this.name}`);
  }

  superMethod() {
    console.log("Ini adalah Super Method");
  }
}

// Child
class Manager extends Employee {
  constructor(name, umur) {
    super(name);
    this.umur = umur;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is manager ${this.name}`);
  }

  superMethod() {
    super.superMethod();
    console.log("Ini adalah Super Method di class child");
  }
}

const employee = new Employee("Yoghantara");
const manager = new Manager("Gustut", 20);

console.log(manager.name);
console.log(manager.umur);
manager.sayHello(employee.name);

employee.superMethod();
manager.superMethod();
