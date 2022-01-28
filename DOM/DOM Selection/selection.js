// DOM Selection

// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Yoghantara';

// document.getElementsByTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = '#ccc';
}
p[0].style.backgroundColor = 'black';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '3em';

// document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Tulisan ini diubah dari javaScript';
p1[0].style.color = 'white';
