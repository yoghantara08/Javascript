// ----------------------------------------------------------
// 2. Manipulasi Node
// ----------------------------------------------------------

// membuat elemen baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf baru dari javascript');
// simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);
// simpan elemen baru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // menyimpan ke akhir dari sebuah elemen parent

// ===========================================================
// buat elemen baru
const liBaru = document.createElement('li');
const liText = document.createTextNode('item baru dari javascript');
// simpan tulisan kedalam li
liBaru.appendChild(liText);
// simpan elemen baru di antara item 1 dan item 2
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2); // insertBefore(node baru, ingin menyimpan sebelum node apa)

// ===========================================================
// remove element
const link = document.querySelector('section#a a');
sectionA.removeChild(link);

// parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
// buat element baru
const h2Baru = document.createElement('h2');
const h2Text = document.createTextNode('Judul baru');
h2Baru.appendChild(h2Text);

// replace child
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';
