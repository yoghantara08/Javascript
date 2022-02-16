// Memecah (expand / unpack) iterables menjadi single element
// ...

const mhs = ['Gustut', 'Ricky', 'Galang', 'Krisdit'];
console.log(...mhs);
console.log(...mhs[0]);

// Menggabungkan array
const pakaian = ['Celana', 'Jas', 'Jaket', 'Baju'];
const warna = ['Merah', 'Kuning', 'Biru'];

const warnaPakaian = [...pakaian, 'Hijau', ...warna];
console.log(warnaPakaian);

// menggabungkan menggunakan prototype concat()
// const warnaPakaian = pakaian.concat(warna);

// Meng-copy array
// 1.
const kendaraan = ['Angkot', 'Mobil', 'Motor', 'Bus'];
console.log(kendaraan);

const kendaraan1 = [...kendaraan, 'Lamborghini'];
kendaraan1[0] = 'Becak';
console.log(kendaraan1);

// 2.
const liNama = document.querySelectorAll('li');

// const nama = [];
// for (let i = 0; i < liNama.length; i++) {
//   nama.push(liNama[i].textContent);
// }
// console.log(nama);

const nama = [...liNama].map((n) => n.textContent);
console.log(nama);

// Hover tiap2 huruf di h1
const hewo = document.querySelector('.hello-world');

const huruf = [...hewo.textContent].map((h) => `<span>${h}</span>`).join('');

hewo.innerHTML = huruf;
