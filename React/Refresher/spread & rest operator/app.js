// Spread
// Untuk split array atau object properties
const numbers = [2, 10, 5, 2, 25];
const newNumbers = [...numbers, 1, 2, 20];
console.log(newNumbers);

const person = {
  name: "Gustut",
  umur: 20,
};
console.log(person);

const newPerson = {
  ...person,
  gender: "Male",
};
console.log(newPerson);

// Rest
// Untuk menggabungkan list of function arguments into an array
const even = (...args) => {
  return args.filter((el) => el % 2 === 0);
};

console.log(even(5, 2, 10, 10, 25, 32, 15, 45, 25, 29, 328));
