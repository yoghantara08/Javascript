function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Inheritance pada prototype menggunakan Object.create()
Manager.prototype = Object.create(Employee.prototype);

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
};

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
};

const employee = new Employee("Gustut");
employee.sayHello("Ricky");

const manager = new Manager("Yoghantara");
manager.sayHello("Galang");

console.info(employee);
console.info(manager);
