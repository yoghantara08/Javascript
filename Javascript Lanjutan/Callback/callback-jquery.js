// JQuery
console.log('tes asynchronous 1');
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach((n) => console.log(n.nama));
  },
  error: (err) => {
    console.log(err.responseText);
  },
});
console.log('tes asynchronous 2');
