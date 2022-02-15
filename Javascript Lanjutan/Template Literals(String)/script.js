// Template Literals / Template String
const nama = 'Gustut';
const umur = 20;
console.log(`Perkenalkan nama saya ${nama}, umur ${umur} Tahun`);

// Embeded Expression
console.log(`${1 + 1}`);
// console.log(`${alert('Halo')}`);

const x = 10;
console.log(`${x % 2 == 0 ? 'Genap' : 'Ganjil'}`);

// HTML Fragments
const mhs = {
  nama: 'Yoghantara',
  umur: 20,
  nim: 200030184,
  email: 'gyoghantara@gmail.com',
};

const el = `<div class="mhs">
                <h2>${mhs.nama}</h2>
                <p><strong>Umur :</strong>  ${mhs.umur}</p>
                <span class="nim"><strong>NIM :</strong> ${mhs.nim}</span>
            </div>`;

document.body.innerHTML = el;
