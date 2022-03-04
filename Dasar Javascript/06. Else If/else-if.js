// var angka = prompt('Masukkan angka: ');

// if (angka % 2 == 0) {
//   alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 == 1) {
//   alert(angka + ' adalah bilangan GANJIL');
// } else {
//   alert(angka + ' bukan angka');
// }

var lagi = true;
while (lagi) {
  var angka = prompt('Masukkan angka: ');
  if (angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
  } else if (angka % 2 == 1) {
    alert(angka + ' adalah bilangan GANJIL');
  } else {
    alert(angka + ' bukan angka');
  }
  lagi = confirm('Coba Lagi?');
}
