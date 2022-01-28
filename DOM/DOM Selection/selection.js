// DOM Selection

// document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = 'lightblue';
// judul.innerHTML = 'Yoghantara';

// // document.getElementsByTagName() -> mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = '#ccc';
// }
// p[0].style.backgroundColor = 'black';

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '3em';

// // document.getElementsByClassName() -> mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Tulisan ini diubah dari javaScript';
// p1[0].style.color = 'white';
// ==============================================================

// document.querySelector() -> mengembalikan element
const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); // hanya mengambil element pertama yang ditemui
// p.innerHTML = 'Diubah melalui javascript';

// document.querySelectorAll() -> mengembalikan nodeList (kumpulan dari node / simpul)
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'red';
}

// Mengubah Node Root
const sectionB = document.getElementById('b');
const li3 = sectionB.querySelector('ul li:nth-child(3)');
li3.style.backgroundColor = 'gray';
