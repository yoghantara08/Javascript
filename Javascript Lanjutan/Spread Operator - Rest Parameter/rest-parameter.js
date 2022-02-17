// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

function myFunc(...myArgs) {
  // return myArgs[0];
  return myArgs;
  // return arguments; <= menjadi object
  // return Array.from(arguments); <= menjadi array
  // return [...arguments] (spread operator)
}

console.log(myFunc(1, 2, 3, 4, 5));

// menjumlahkan seluruh parameter yg dikirim

function kalkulasi(...angka) {
  // let total = 0;
  // for (const a of angka) {
  // total += a;
  // }
  // return total;

  return angka.reduce((acc, cur) => acc + cur);
}

console.log(kalkulasi(1, 2, 3, 4, 5));

// array destructuring
const klp1 = ['Gustut', 'Ricky', 'Galang', 'Krisdit', 'Rama'];
// nama pertama = ketua
// nama kedua = wakil
// nama seterusnya = anggota
const [ketua, wakil, ...anggota] = klp1;
console.log(anggota);

// object destructuring
const team = {
  projectManager: 'Gustut',
  frontEnd1: 'Ricky',
  frontEnd2: 'Rama',
  backEnd: 'Galang',
  ux: 'Krisdit',
  devOps: 'Yopha',
};

const { pm, ...myTeam } = team;
console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('number', 2, 5, true, false, 'Gustut', null, undefined, 10, 'Ricky', 7));
