var penumpang = ['gustut', 'yoghantara', undefined, 'ricky'];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' Sudah berada di dalam Angkot');
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang diakhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
    console.log('Angkot sedang kosong');

    return penumpang;
  } else {
    // telusuri seluruh kursi awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // rubah menjadi undefined
        penumpang[i] = undefined;

        return penumpang;
      }
      // jika tidak ada nama yang sesuai
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahan
        console.log('Tidak ada penumpang dengan nama ' + namaPenumpang);

        return penumpang;
      }
    }
  }
};
