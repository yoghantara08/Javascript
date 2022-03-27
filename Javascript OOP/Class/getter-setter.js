class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const person = new Person("Gustut", "Yoghantara");
console.log(person);
console.log(person.fullName);

person.fullName = "Ridjky Tegar";
console.log(person);
console.log(person.fullName);
