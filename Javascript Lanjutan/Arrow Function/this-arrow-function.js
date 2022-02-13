// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = 'Gustut';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, saya ${this.nama}, Umur saya ${this.umur} Tahun`);
//   };
// };

// const gustut = new Mahasiswa();
// gustut.sayHello();

// Arrow Function
// const Mahasiswa2 = function () {
//   this.nama = 'Yoghantara';
//   this.umur = 15;
//   this.sayHello = function () {
//     console.log(`Halo, saya ${this.nama}, Umur saya ${this.umur} Tahun`);
//   };

//  this pada arrow function (lexical scope)
//  setInterval(() => {
//     console.log(this.umur++);
//   }, 2000);

// };

// const yoghantara = new Mahasiswa2();
// yoghantara.sayHello();

// ====================================================
// Kasus menggunakan Arrow Function
const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let size = 'size';
  let caption = 'caption';

  if (this.classList.contains(size)) {
    [size, caption] = [caption, size];
  }

  this.classList.toggle(size);
  setTimeout(() => {
    this.classList.toggle(caption);
  }, 600);
});
