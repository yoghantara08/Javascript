// Asyncronous Function
// 1. Function yang bekerja secara asyncronous (melalui event loop)
// 2. Menghasilkan (implisit) promise sebagai return value-nya
// 3. cara penulisan code-nya menggunakan penulisan yang syncronous (standar) / syncronous function (function biasa)
// 4. Dapat memiliki keyword await didalamnya untuk memberhentikan sementara eksekusi function-nya sambil menunggu promise-nya selesai

// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Selesai');
//   }, 2000);
// });
// coba.then(() => console.log(coba));

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Selesai');
//     }, 2000);
//   });
// }

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();

//
function tesPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('Selesai');
      }, waktu);
    } else {
      reject('Rejected!');
    }
  });
}

async function tesAsync() {
  try {
    const tes = await tesPromise();
    console.log(tes);
  } catch (err) {
    console.error(err);
  }
}
tesAsync();
