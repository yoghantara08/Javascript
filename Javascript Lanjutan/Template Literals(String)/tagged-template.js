// Tagged Template
// const nama = 'Gustut';
// const umur = 20;
// const game = {
//   nama: 'Genshin',
//   char: 'Eula',
// };

// function coba(strings, ...values) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Nama : ${nama}
// Umur : ${umur} Tahun`;

// const pGame = coba`Game : ${game.nama}
// Char : ${game.char}`;

// console.log(str);
// console.log(pGame);

// Highlight
const nama = 'Gustut';
const umur = 20;
const game = {
  nama: 'Genshin',
  char: 'Eula',
};

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str} <span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Nama : ${nama} 
Umur : ${umur} Tahun`;

const pGame = highlight`Game : ${game.nama} 
Char : ${game.char}`;

document.body.innerHTML = `${str} <br />
${pGame}`;
