// Sebuah solusi untuk menangani Callback Hell

// fetch('http://www.omdbapi.com/?s=avengers&apikey=846c6911')
//   .then((response) => response.json())
//   .then((response) => console.log(response));
// Fetch mengembalikan Promise

// Promise
// Sebuah Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / tidak terpenuhi(ingkar))
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
let terpenuhi = true;
const janji1 = new Promise((resolve, reject) => {
  if (terpenuhi) {
    resolve('Terpenuhi');
  } else {
    reject('Ingkar janji..');
  }
});

janji1.then((response) => console.log('Janji : ' + response)).catch((response) => console.log('Janji : ' + response));

// contoh 2
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu!');
    }, 3000);
  } else {
    setTimeout(() => {
      reject('Tidak ditepati setelah beberapa waktu!');
    }, 3000);
  }
});

console.log('Mulai');

// console.log(janji2.then(() => console.log(janji2)));
janji2
  .finally(() => console.log('Selesai menunggu!'))
  .then((response) => console.log('Keadaan : ' + response))
  .catch((response) => console.log('Keadaan : ' + response));

console.log('Selesai');

// =================================================================
// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Avenger',
        sutradara: 'Gustut',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'Denpasar',
        temp: 30,
        kondisi: 'Cerah',
      },
    ]);
  }, 1000);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
