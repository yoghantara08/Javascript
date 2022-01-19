// ALERT
// alert('ini adalah pop up box alert');
// alert('P ALERT');
// alert('COBA');

/* PROMPT popup yg memunculkan box inputan 
(isikan variable jika ingin mendapatkan nilai yg diinput)*/

// prompt('masukkan nama:');
// var nama = prompt('Masukkan Nama:'); // Nilai yg diinput dapat diakses oleh variable "nama"
// alert('Hallo ' + nama);

// CONFIRM
// var tes = confirm('Kamu Yakin??');

// if (tes === true) {
//   alert('user menekan OK!');
// } else {
//   alert('user menekan CANCEL!');
// }

alert('Selamat Datang');
var lagi = true;

while (lagi) {
  var nama = prompt('Masukkan Nama: ');
  alert('Halo ' + nama);

  lagi = confirm('Coba Lagi');
}

alert('Terimakasih');
