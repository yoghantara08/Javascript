// Destructuring
// Extract array elements or object properties and store them in variables

// Array destructuring
const numbers = [10, 24, 21, 42, 5];
[num1, num2, , num4] = numbers;

console.log(num1);
console.log(num2);
console.log(num4);

// Object destructuring
const person = {
  nama: "Gustut",
  umur: 20,
};

const { nama, umur } = person;
console.log(nama, umur);
