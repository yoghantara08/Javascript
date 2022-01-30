// Inline HTML Attribute
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
  p3.style.backgroundColor = 'crimson';
}

// Event handler (menimpa event sebelumnya jika dibuat lebih dari 1)
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

function ubahWarnaP2() {
  p2.style.backgroundColor = 'crimson';
}

// addEventListener (tidak menimpa event sebelumnya melainkan dijalankan semuanya bersamaan)
const p4 = document.querySelector('.p4');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const liText = document.createTextNode('Item Baru');
  liBaru.appendChild(liText);
  ul.appendChild(liBaru);
});
