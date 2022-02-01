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

// Menangkap pilihan user
const pBatu = document.querySelector('.batu');
const pGunting = document.querySelector('.gunting');
const pKertas = document.querySelector('.kertas');

pBatu.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanUser = pBatu.className;
  const hasil = getHasil(pilihanKomputer, pilihanUser);

  const imgKomputer = document.querySelector('.imgKomputer');
  imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const pemenang = document.querySelector('.pemenang');
  pemenang.innerHTML = hasil;
});

pGunting.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanUser = pGunting.className;
  const hasil = getHasil(pilihanKomputer, pilihanUser);

  const imgKomputer = document.querySelector('.imgKomputer');
  imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const pemenang = document.querySelector('.pemenang');
  pemenang.innerHTML = hasil;
});

pKertas.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanUser = pKertas.className;
  const hasil = getHasil(pilihanKomputer, pilihanUser);

  const imgKomputer = document.querySelector('.imgKomputer');
  imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const pemenang = document.querySelector('.pemenang');
  pemenang.innerHTML = hasil;
});
