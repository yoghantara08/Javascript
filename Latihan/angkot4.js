var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else if (noAngkot === 8 || noAngkot === 10) {
    // cara lebih efektif (memakai logika || (atau))
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}
