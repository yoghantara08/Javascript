// pake if else
// if (angka === 1) {
//   alert('anda memasukkan angka 1');
// } else if (angka === 2) {
//   alert('anda memasukkan angka 2');
// } else {
//   alert('angka yang anda masukkan salah');
// }

// var angka = parseInt(prompt('Masukkan angka'));
// parseInt : convert string to integer

// switch (angka) {
//   case 1:
//     alert('anda memasukkan angka 1');
//     break;
//   case 2:
//     alert('anda memasukkan angka 2');
//     break;
//   case 3:
//     alert('anda memasukkan angka 3');
//     break;
//   default:
//     alert('angka yang anda masukkan salah');
//     break;
// }

// Looping switch case
// var ulang = true;
// while (ulang) {
//   var item = prompt('Pilih Film Kesukaan Anda \n 1. Spiderman \n 2. Superman \n 3. Frozen');
//   switch (item) {
//     case '1':
//       alert('Film Kesukaan anda adalah Spiderman');
//       break;
//     case '2':
//       alert('Film Kesukaan anda adalah Superman');
//       break;
//     case '3':
//       alert('Film Kesukaan anda adalah Frozen');
//       break;
//     default:
//       alert('Anda memasukkan pilihan yang salah');
//       break;
//   }
//   ulang = confirm('Ulangi?');
// }

// tidak memakai banyak break (kalo tidak ada break dia akan lanjut ke case selanjutnya dan mengambil aksi didalam case selanjutnya);
var item = prompt('Ketikkan makanan kesukaan : (ketik satu saja) \n nasi,hamburger,sayur,pizza');

switch (item) {
  case 'nasi':
  case 'sayur':
    alert('Makanan Sehat');
    break;
  case 'hamburger':
  case 'pizza':
    alert('Makanan Tidak Sehat');
    break;
  default:
    alert('Makanan yang anda ketikkan salah');
    break;
}
