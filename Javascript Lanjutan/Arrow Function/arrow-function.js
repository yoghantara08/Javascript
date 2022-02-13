// Arrow Function merupakan bentuk lain yang lebih ringkas dari Function Expression

// Function Expression
let tampilPesan1 = function (nama) {
  console.log(`Halo, ${nama}`);
};

tampilPesan1('Gustut');

// Arrow Function
// function () menjadi () =>
let tampilPesan2 = (nama) => {
  console.log(`Halo, ${nama}`);
};

tampilPesan2('Yoghantara');

// Membuat Arrow Function
const tampilNama = (nama, waktu) => {
  return `Halo, ${nama}, Selamat ${waktu}`;
};
console.log(tampilNama('Gustut Yoghantara', 'Pagi'));

// Implisit return
const tampilNama2 = (waktu) => `Selamat ${waktu}`;
console.log(tampilNama2('Pagi'));

const helloWorld = () => 'Hello World';
console.log(helloWorld());
