// Destructuring Variable
// Expression yang membuat kita dapat 'Membongkar' nilai dari array atau property dari object kedalam variable yang terpisah

// Destructuring Object
const mhs = {
  nama: 'Gustut',
  umur: 20,
};

// nama variable harus sama dengan nama property pada object
const { nama, umur } = mhs;
console.log(nama);

// Assignment tanpa deklarasi object
({ tes, coba } = { tes: 'Yoghantara', coba: 25 });
console.log(tes, coba);

// Assign ke Variable baru
const { nama: n, umur: u } = mhs;
console.log('assign ke variable baru \n' + n);

// Memberikan default value
const mobil1 = {
  merk: 'Adidas',
  harga: 12000,
};

const { merk, harga, warna = 'belum ada warna' } = mobil1;
console.log(warna);

// Memberi nilai default + assign ke variable baru
const mobil2 = {
  merk: 'Aqua',
  harga: 20000,
  warna: 'biru',
};

const { merk: m, harga: h, warna: w = 'belum ada warna' } = mobil2;
console.log(w);

// Rest Parameter
const game = {
  nGame: 'Genshin',
  char: 'Hu Tao',
  weapon: 'Spear',
};

const { nGame, ...values } = game;
console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const sirkuit = {
  id: 123,
  trackJauh: 'Jauh',
  trackMenengah: 'Menengah',
  trackDekat: 'Dekat',
};

// function getIdSirkuit(sirkuit) {
//   return sirkuit.id;
// }

function getIdSirkuit({ id }) {
  return id;
}
console.log(getIdSirkuit(sirkuit));
