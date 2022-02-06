// OBJECT ADALAH ARRAY YG LEBIH SAKTI

// membuat object

// object literal
let mhs = {
  nama: 'Gustut',
  umur: 20,
  ips: [3.2, 3.3, 3.65],
  alamat: {
    kota: 'Badung',
    jalan: 'Wahyu Graha',
  },
};

// Function declaration
function buatObjectMahasiswa(nama, umur, ips, alamat) {
  let mhs = {};
  mhs.nama = nama;
  mhs.umur = umur;
  mhs.ips = ips;
  mhs.alamat = alamat;

  return mhs;
}
let mhs2 = buatObjectMahasiswa('Yogha', 19, [2.5, 3.3, 3.8], 'wahyu graha');

// Constructor
function Mahasiswa(nama, umur, ips, alamat) {
  this.nama = nama;
  this.umur = umur;
  this.ips = ips;
  this.alamat = alamat;
}
// Memanggilnya harus berisikan "new" didepan constructor (agar JS tidak mengira bahwa constructor tersebut adalah function declaration)
let mhsConstructor = new Mahasiswa('GusYogha', 21, [3.5, 3.7, 3.9], 'Buduk');

// THIS
let a = 5;
// this = window (global scope)
// this mengembalikan object global
console.log(this.a);

// jika menggunakan constructor, this mengembalikan object yg baru dibuat
