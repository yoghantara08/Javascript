// For..of
// Creates a loop iterating over iterable object
// Iterable Object ;
// 1. String
// 2. Array
// 3. Arguments / NodeList
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined Iterables

// 1. String
const nama = 'Yoghantara';
for (const n of nama) {
  console.log(n);
}

// ===========================================================
// 2. Array
const mhs = ['Gustut', 'Ricky', 'Galang', 'Krisdit'];

// for
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// forEach
mhs.forEach((m, i) => {
  console.log(`${i + 1}. ${m}`);
});

// for..of
// entries() untuk mengakali for..of untuk mendapatkan index
for (const [i, m] of mhs.entries()) {
  console.log(i + 1, m);
}

// ===========================================================
// 3. NodeList
const liNama = document.querySelectorAll('.nama');

// forEach
liNama.forEach((n) => console.log(n.innerHTML));

// for..of
for (n of liNama) {
  console.log(n);
}

// 3. Arguments
function kalkulasi() {
  let jumlah = 0;
  for (tambah of arguments) {
    jumlah += tambah;
  }
  return jumlah;
}

console.log(kalkulasi(1, 2, 3, 4, 5));
