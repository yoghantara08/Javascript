// const hapusCard = document.querySelector('.card');
// const tombolX = document.querySelector('.close');

// tombolX.addEventListener('click', function () {
//   // hapusCard.remove;
//   hapusCard.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (e) {
//     // close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

// forEach (tiap element)
close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault(); // menghentikan aksi default dari element yg diambil
    e.stopPropagation(); // event bubbling (menyetop program agar tidak bertabrakan dengan yang lain)
    // atau bisa dibilang agar berjalan sendiri2
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    alert('ok');
  });
});

// ====================================================
// Mencoba beberapa method DOM Traversal
const nama = document.querySelector('.nama');

// Grandparent node = node
console.log('Grandparent node : ');
console.log(nama.parentNode.parentNode);

// parentNode = node
console.log('parentNode : ');
console.log(nama.parentNode);

// parentElement = element
console.log('parentElement : ');
console.log(nama.parentElement);

// nextSibling = node
console.log('nextSibling : ');
console.log(nama.nextSibling);

// nextElementSibling = element
console.log('nextElementSibling : ');
console.log(nama.nextElementSibling);

// previousSibling = node
console.log('previousSibling : ');
console.log(nama.previousSibling);

// previousElementSibling = element
console.log('previousElementSibling : ');
console.log(nama.previousElementSibling);
