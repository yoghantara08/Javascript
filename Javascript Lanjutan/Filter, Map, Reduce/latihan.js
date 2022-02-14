// Ambil semua elemen video
// Array.from() untuk mengubah nodeList menjadi Array
const videos = Array.from(document.querySelectorAll('li[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((times) => {
    // 10:30 -> [10, 30] split
    const parts = times.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, sec) => total + sec);
// ubah detik jadi jam.menit.detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Itung banyak video JS LANJUT
const itungVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

// simpan di DOM
const jumlahVideo = document.querySelector('span.jumlah-video');
const durasiVideo = document.querySelector('span.total-durasi');

jumlahVideo.innerHTML = `${itungVideo} Videos`;
durasiVideo.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
