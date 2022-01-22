var ulangi = true;
while (ulangi) {
  // menangkap pilihan player
  var p = prompt('pilih : batu, gunting, kertas');

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'batu';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'gunting';
  } else {
    comp = 'kertas';
  }
  console.log(comp);

  // menentukan rules
  var hasil = '';

  if (p == comp) {
    hasil = 'SERI!';
  } else if (p == 'batu') {
    // IF ELSE
    //   if (comp == 'gunting') {
    //     hasil = 'MENANG!';
    //   } else {
    //     hasil = 'KALAH';
    //   }

    //   Ternary
    hasil = comp == 'gunting' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'gunting') {
    hasil = comp == 'kertas' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'kertas') {
    hasil = comp == 'batu' ? 'MENANG!' : 'KALAH!';
  } else if (p == null) {
    hasil = 'Kamu tidak memilih';
  } else {
    hasil = 'Anda memasukkan pilihan yang salah';
  }

  // tampilkan hasilnya
  alert('Pilihanmu : ' + p + '\nPilihan Komputer : ' + comp + '\nHasil : ' + hasil);

  ulangi = confirm('Lagi?');
}

alert('TERIMAKASIH SUDAH BERMAIN');
