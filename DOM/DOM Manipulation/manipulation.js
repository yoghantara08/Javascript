// element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Judul diubah dari javascript';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World'; // tidak peduli dengan banyak tag html di dalam selector tertentu. Semuanya akan diubah seperti yang dituliskan pada innerHTML

// ==========================================================
// element.style.<property>

// const judul = document.querySelector('#judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'lightblue';

// ==========================================================
// element.setAttribute()

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'gustut');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// ==========================================================
// element.classList
const label = document.querySelector('section#a p:nth-child(3)');
label.classList.add('label');
label.classList.remove('p2');
