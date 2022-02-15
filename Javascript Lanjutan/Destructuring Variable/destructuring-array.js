// Destructuring Variable
// Expression yang membuat kita dapat 'Membongkar' nilai dari array atau property dari object kedalam variable yang terpisah

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'gustut'];
const [salam, satu, dua, nama] = perkenalan;

console.log(nama);

// skipping items
const siswa = ['joni', 'dodo', 'liam', 'henri'];
const [sSatu, , , sEmpat] = siswa;

console.log(sEmpat);

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function
function coba() {
  return [5, 10];
}

const [c, d] = coba();
console.log(c);
console.log(d);

// Rest parameter
const [i, ...values] = ['rest parameter', 30, 45, 60, 75, 90, 100];

console.log(i);
console.log(values);
