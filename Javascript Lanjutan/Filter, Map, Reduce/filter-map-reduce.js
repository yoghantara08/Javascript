const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// filter
// const angkaBaru = angka.filter(function (a) {
//   return a >= 3;
// });
const angkaBaru = angka.filter((a) => a >= 3);
console.log(angkaBaru);

// map
// kalikan semua angka dengan 2
const kaliAngka = angka.map((b) => b * 2);
console.log(kaliAngka);

// reduce
// menjumlahkan seluruh elemen pada array
const jumlahAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0 /* nilai awal default (0) */);
console.log(jumlahAngka);

// =========================================================
// Method Chaining

// 1. cari angka > 5
// 2. kalikan 3
// 3. jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(hasil);
