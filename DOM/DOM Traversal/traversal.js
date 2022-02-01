// const hapusCard = document.querySelector('.card');
// const tombolX = document.querySelector('.close');

// tombolX.addEventListener('click', function () {
//   // hapusCard.remove;
//   hapusCard.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function (e) {
    // close[i].parentElement.style.display = 'none';
    e.target.parentElement.style.display = 'none';
  });
}
