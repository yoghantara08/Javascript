function cetakNama(nama) {
  return `Halo nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Gustut",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, umur ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

// Kalo property dan value dengan nama yg sama bisa ditulis sekali
module.exports = { cetakNama, PI, mahasiswa, Orang };

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;
