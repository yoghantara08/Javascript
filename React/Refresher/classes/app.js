// Parent Class
class Human {
  // cara lama
  constructor(gender) {
    this.gender = gender;
  }
  // cara modern, bisa langsung
  umur = 20;

  printGender() {
    console.log(this.gender);
  }
}

// Child Class
class Person extends Human {
  constructor(name) {
    super();
    this.name = name;
  }

  // method / function biasa
  sayHello() {
    console.log(`Hello ${this.name}, Semangat belajar React!!`);
  }

  // arrow function
  printUmur = () => {
    console.log(this.umur);
  };
}

const person = new Person("Gustut");
person.gender = "Male";

person.sayHello();
person.printGender();
person.printUmur();
