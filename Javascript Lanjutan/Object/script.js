// Cara untuk membuat Object pada Javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama: 'Gustut',
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Selamat datang ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Selamat datang ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energy -= jam;
    console.log(`Selamat datang ${this.nama}, selamat bermain!`);
  },

  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Selamat tidur ${this.nama}`);
  },
};

function Mahasiswa(nama, energy) {
  // Object.create()
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  // mahasiswa.makan = methodMahasiswa.makan;
  // mahasiswa.main = methodMahasiswa.main;
  // mahasiswa.tidur = methodMahasiswa.tidur;

  return mahasiswa;
}

let gustut = Mahasiswa('Gustut', 15);
let yoghantara = Mahasiswa('Yoghantara', 12);

// 3. Constructor Function
// Keyword : new
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Selamat datang ${this.nama}, selamat makan!`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Selamat datang ${this.nama}, selamat bermain!`);
//   };
// }

// let gustut = new Mahasiswa('Gustut', 10);
// let yoghantara = new Mahasiswa('Yoghantara', 12);
