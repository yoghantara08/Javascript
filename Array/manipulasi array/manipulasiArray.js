// Manipulasi array

// // 1. Menambah isi array
// var arr = [];
// arr[0] = [1];
// arr[2] = [3];
// arr[3] = [5];
// arr[6] = [10];
// console.log(arr);

// // 2. Menghapus isi array
// var arr = [1, 2, 3, 4];
// arr[1] = undefined;
// console.log(arr);

// // 3. Menampilkan isi array
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];

// for (var i = 0; i < arr.length /* Method pada array */; i++) {
//   console.log('Mahasiswa ke- ' + (i + 1) + ': ' + arr[i]);
// }

// // Method pada array
// 1. Join (menjadikan isi array menjadi string)
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// console.log(arr.join(' - '));

// 2. push & pop
// var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
// arr.push('yohan', 'doddy'); // menambahkan nilai di paling belakang
// arr.pop(); // menghapus nilai di paling belakang
// console.log(arr.join(' - '));
// // yohan & doddy ditambahkan oleh push -> doddy dihilangkan pop

// 3. unshift & shift
var arr = ['gustut', 'ricky', 'galang', 'krisdit', 'rama'];
arr.unshift('doddy', 'yohan'); //menambahkan elemen baru di awal array
arr.shift(); //menghapus elemen paling awal
console.log(arr.join(' - '));
// doddy & yohan ditambahkan oleh unshift -> doddy(paling awal) dihapus oleh shift
