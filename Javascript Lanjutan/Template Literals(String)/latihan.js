// Looping
const mhs = [
  {
    nama: 'Gustut',
    email: 'gustut@gmail.com',
  },
  {
    nama: 'Galang',
    email: 'galang@gmail.com',
  },
  {
    nama: 'Ricky',
    email: 'ricky@gmail.com',
  },
];

const el = `<div class="mhs">
    ${mhs
      .map(
        (m) => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`
      )
      .join('')}
</div>`;

// ===================================================
// Conditionals
// Ternary
const lagu = {
  judul: 'Sandal Hijau',
  penyanyi: 'Dioga',
  feat: 'tes',
};

const el2 = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`;

// ===================================================
// Nested
// HTML Fragments Bersarang
const mahasiswa = {
  nama: 'Rama',
  semester: 4,
  matkul: ['Web', 'Java', 'Python', 'C++'],
};

function cetakMatKul(matKul) {
  return `
        <ol>
            ${matKul.map((mk) => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el3 = `<div class="mahasiswa">
    <h2>${mahasiswa.nama}</h2>
    <span class="semester">Semester : ${mahasiswa.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMatKul(mahasiswa.matkul)}
</div>`;

document.body.innerHTML = el3;
