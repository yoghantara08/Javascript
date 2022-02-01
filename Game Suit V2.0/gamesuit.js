// Menangkap pilihan komputer
function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'batu';
  if (comp >= 0.34 && comp < 0.67) return 'gunting';
  return 'kertas';
}

// Aturan
function getHasil(comp, user) {
  if (user == comp) return 'SERI!';
  if (user == 'batu') return comp == 'gunting' ? 'MENANG!' : 'KALAH!';
  if (user == 'gunting') return comp == 'kertas' ? 'MENANG!' : 'KALAH!';
  if (user == 'kertas') return comp == 'batu' ? 'MENANG!' : 'KALAH!';
}

// Timing events (untuk memutar gambar pilihan komputer)
function putar() {
  const imgKomputer = document.querySelector('.imgKomputer');
  const gambar = ['batu', 'gunting', 'kertas'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

// Menangkap pilihan user
const pilihanPlayer = document.querySelectorAll('.kotakUser img');

pilihanPlayer.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanUser = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanUser);
    const textHasil = document.querySelector('.pemenang');
    textHasil.innerHTML = '';

    putar();
    setTimeout(function () {
      const imgKomputer = document.querySelector('.imgKomputer');
      imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

      const pemenang = document.querySelector('.pemenang');
      pemenang.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector('.batu');
// const pGunting = document.querySelector('.gunting');
// const pKertas = document.querySelector('.kertas');

// pBatu.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = pBatu.className;
//   const hasil = getHasil(pilihanKomputer, pilihanUser);

//   const imgKomputer = document.querySelector('.imgKomputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const pemenang = document.querySelector('.pemenang');
//   pemenang.innerHTML = hasil;
// });

// pGunting.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = pGunting.className;
//   const hasil = getHasil(pilihanKomputer, pilihanUser);

//   const imgKomputer = document.querySelector('.imgKomputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const pemenang = document.querySelector('.pemenang');
//   pemenang.innerHTML = hasil;
// });

// pKertas.addEventListener('click', function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = pKertas.className;
//   const hasil = getHasil(pilihanKomputer, pilihanUser);

//   const imgKomputer = document.querySelector('.imgKomputer');
//   imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//   const pemenang = document.querySelector('.pemenang');
//   pemenang.innerHTML = hasil;
// });
