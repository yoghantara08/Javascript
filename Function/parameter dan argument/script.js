// function tambah(a, b /* Parameter */) {
//   return a + b;
// }

// // contoh 1
// console.log(tambah(5, 10 /* Argument */));

// // contoh 2
// var hasil = tambah(20, 20);
// alert(hasil);

// // contoh 3
// var a = parseInt(prompt('Masukkan Nilai a : '));
// var b = parseInt(prompt('Masukkan Nilai b : '));
// var hasil = tambah(a, b);
// alert(hasil);

function tambah(a, b /* Parameter */) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

var hasil = kali(tambah(2, 3), tambah(5, 4));
alert(hasil);
