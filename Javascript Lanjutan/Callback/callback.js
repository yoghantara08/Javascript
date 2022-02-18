// Callback
// Function yang dikirimkan sebagai parameter pada function yang lain

// Synchronous Callback
// (jarang dipakai)
// 1.
function halo(nama) {
  alert(`Halo, ${nama}`);
}

function tampilPesan(callback) {
  const nama = prompt('Masukkan Nama : ');
  callback(nama);
}

// tampilPesan(halo);
// tampilPesan((nama) => alert(`Halo ${nama}`));

// 2.
const mhs = [
  {
    nama: 'Gustut',
    nim: '00123456',
    email: 'gustut@gmail.com',
    jurusan: 'Sistem Informasi',
    idDosen: 1,
  },
  {
    nama: 'Yoghantara',
    nim: '3531235',
    email: 'yoghantara@gmail.com',
    jurusan: 'Sistem Informasi',
    idDosen: 2,
  },
  {
    nama: 'Ricky',
    nim: '04532324',
    email: 'ricky@gmail.com',
    jurusan: 'Teknik Informatika',
    idDosen: 3,
  },
];

// const namaMhs = mhs.map(({ nama, ...dataMhs }, i) => {
//   return `Mahasiswa ${i + 1}: ${nama}`;
// });
// console.log(namaMhs);

mhs.forEach((m) => console.log(m.nama));
