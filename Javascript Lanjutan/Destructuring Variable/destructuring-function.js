// Destructuring Function

// function kalkulasi(a, b) {
//   return [a + b, a * b];
// }

// const jumlah = kalkulasi(3, 3);
// console.log(jumlah);

// const [tambah, kali] = kalkulasi(2, 5);
// console.log(tambah, kali);

function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { kali, tambah, kurang, bagi } = kalkulasi(2, 5);
console.log(kali);

// Destructuring Function arguments
const mhs1 = {
  nama: 'Gustut',
  umur: 20,
  nilai: {
    tugas: 70,
    uts: 90,
    uas: 100,
  },
};

function cetakMhs({ nama, umur, email = 'belum ada data', nilai: { tugas, uts, uas } }) {
  return `Nama : ${nama}
Umur : ${umur}
Email : ${email}
Nilai UTS : ${uts}`;
}

console.log(cetakMhs(mhs1));
