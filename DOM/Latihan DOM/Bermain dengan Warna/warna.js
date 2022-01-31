const putih = document.querySelector('button.putih');
const tombol = document.querySelector('button.t1');
const tombol2 = document.querySelector('button.t2');
const tombol3 = document.querySelector('button.t3');

const removeBackground = function () {
  document.body.classList.remove('white');
  document.body.classList.remove('lightblue');
  document.body.classList.remove('green');
  document.body.classList.remove('crimson');
};

// Default / putih
putih.addEventListener('click', function () {
  removeBackground();
  document.body.removeAttribute('style');
});
// Crimson
tombol.addEventListener('click', function () {
  document.body.classList.toggle('crimson');

  document.body.classList.remove('white');
  document.body.classList.remove('lightblue');
  document.body.classList.remove('green');
  document.body.removeAttribute('style');
});
// Lightblue
tombol2.addEventListener('click', function () {
  document.body.classList.toggle('lightblue');

  document.body.classList.remove('white');
  document.body.classList.remove('green');
  document.body.classList.remove('crimson');
  document.body.removeAttribute('style');
});
// Green
tombol3.addEventListener('click', function () {
  document.body.classList.toggle('green');

  document.body.classList.remove('white');
  document.body.classList.remove('lightblue');
  document.body.classList.remove('crimson');
  document.body.removeAttribute('style');
});

// ===============================================================
// Acak Warna
const tAcakWarna = document.createElement('button'); //buat element
const tAcakTombol = document.createTextNode('Acak Warna'); //buat teks didalam element
tAcakWarna.appendChild(tAcakTombol); //masukkan text kedalam element
tAcakWarna.setAttribute('type', 'button'); //membuat attribut didalam element
//masukkan Element yang sudah dibuat setelah tombol3
tombol3.after(tAcakWarna);
// buat event listener acak warna
tAcakWarna.addEventListener('click', function () {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  removeBackground();
});

// ===============================================================
// Slider Warna
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// merah
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  removeBackground();
});
// hijau
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  removeBackground();
});
// biru
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  removeBackground();
});

// ===============================================================
// Mouse movement
// document.body.addEventListener('mousemove', function (event) {
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//   console.log(xPos);
//   console.log(yPos);
//   document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
// });
