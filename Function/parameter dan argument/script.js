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

// contoh menggunakan 2 function
// function tambah(a, b /* Parameter */) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// var hasil = kali(tambah(2, 3), tambah(5, 4));
// alert(hasil);

// coba arguments
// function cobaArguments() {
//   return arguments;
// }
// var coba = cobaArguments(1, 2, 3, 'hi', false);
// console.log(coba);

// Contoh penggunaan arguments
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(5, 5, 10, 15, 20, 25);
alert(coba);
