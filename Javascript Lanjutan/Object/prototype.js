// Versi prototype inheritance
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama} Selamat Makan`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama} Selamat Bermain`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama} Selamat Tidur`;
};

let gustut = new Mahasiswa('Gustut', 10);

// ======================================================
// Versi Class
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} Selamat Makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama} Selamat Bermain`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama} Selamat Tidur`;
  }
}

let yoghantara = new Siswa('Yoghantara', 20);
