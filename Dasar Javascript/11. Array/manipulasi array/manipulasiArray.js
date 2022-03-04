// Manipulasi array

// // 1. Menambah isi array
// var arr = [];
// arr[0] = [1];
// arr[2] = [3];
// arr[3] = [5];
// arr[6] = [10];
// console.log(arr);

// // 2. Menghapus isi array
// var arr = [1, 2, 3, 4];
// arr[1] = undefined;
// console.log(arr);

// // 3. Menampilkan isi array
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];

// for (var i = 0; i < arr.length /* Method pada array */; i++) {
//   console.log('Mahasiswa ke- ' + (i + 1) + ': ' + arr[i]);
// }

// // Method pada array
// 1. Join (menjadikan isi array menjadi string)
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// console.log(arr.join(' - '));

// 2. push & pop
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// arr.push('yohan', 'doddy'); // menambahkan nilai di paling belakang
// arr.pop(); // menghapus nilai di paling belakang
// console.log(arr.join(' - '));
// // yohan & doddy ditambahkan oleh push -> doddy dihilangkan pop

// 3. unshift & shift
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// arr.unshift('doddy', 'yohan'); //menambahkan elemen baru di awal array
// arr.shift(); //menghapus elemen paling awal
// console.log(arr.join(' - '));
// // doddy & yohan ditambahkan oleh unshift -> doddy(paling awal) dihapus oleh shift

// 4. splice
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// arr.splice(3, 2, 'doddy', 'yohan');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir)
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// // for (var i = 0; i < angka.length; i++) {
// //   console.log(angka[i]);
// // }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log('Mahasiswa ke- ' + (i + 1) + ': ' + e);
// });

// 7. map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var tampilAngka = angka.map(function (e) {
//   return e * 2;
// });
// console.log(tampilAngka.join(' - '));

// 8. sort
// var angka = [2, 5, 1, 6, 7, 20, 30, 10, 50, 9, 3, 5];
// console.log(angka.join(' - '));
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(' - '));

// 9. filter (bisa mencari banyak nilai)
// 10. find (hanya dapat mencari angka pertama yg ditemukan)
var angka = [2, 5, 1, 6, 7, 20, 30, 10, 50, 9, 3, 5];
var angka2 = angka.filter(function (x) {
  return x >= 5;
});
var angka3 = angka.find(function (y) {
  return y >= 5;
});
console.log('array awal : ' + angka.join(' - '));
console.log('filter : ' + angka2.join(' - '));
console.log('find : ' + angka3);
