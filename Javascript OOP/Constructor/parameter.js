function Person(name, umur) {
  this.name = name;
  this.umur = umur;
  this.sayHello = function (name) {
    console.log(`Halo ${name}, saya ${this.name}`);
  };
}

const person1 = new Person("Gustut", 20);
console.log(person1);
console.log(person1.name);
console.log(person1.umur);
person1.sayHello("Ricky");

const person2 = new Person("Yoghantara", 25);
person2.sayHello("Galang & Krisdit");
