// Object biasa
const mahasiswa = {
  nama: "Gustut",
  umur: 20,
};

// Constructor function
function Mahasiswa() {
  this.name;
  this.umur;
}

// membuat object dari constructor function
const gustut = new Mahasiswa();
gustut.name = "Gustut";
gustut.umur = 20;

const yoghantara = new Mahasiswa();
yoghantara.name = "Yoghantara";
yoghantara.umur = 21;

console.log(gustut);
console.log(gustut.name);
console.log(gustut.umur);

console.log(yoghantara);
console.log(yoghantara.name);
console.log(yoghantara.umur);
