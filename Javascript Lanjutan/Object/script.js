// Cara untuk membuat Object pada Javascript

// 1. Object Literal
// let mahasiswa = {
//   nama: 'Gustut',
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Selamat datang ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Selamat datang ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Selamat datang ${this.nama}, selamat bermain!`);
//   };

//   return mahasiswa;
// }

// let gustut = Mahasiswa('Gustut', 15);
// let yoghantara = Mahasiswa('Yoghantara', 12);

// 3. Constructor Function
// Keyword : new
function Mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Selamat datang ${this.nama}, selamat makan!`);
  };
  this.main = function (jam) {
    this.energy -= jam;
    console.log(`Selamat datang ${this.nama}, selamat bermain!`);
  };
}

let gustut = new Mahasiswa('Gustut', 10);
let yoghantara = new Mahasiswa('Yoghantara', 12);
