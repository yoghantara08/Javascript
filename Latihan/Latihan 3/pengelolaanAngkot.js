// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // mengelola penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  // mengelola penumpang turun dan bayar
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // Angkot kosong
    if (this.penumpang.length === 0) {
      console.log('Angkot masih kosong');
      return false; //agar keluar dari method
    }
    // menelusuri penumpang didalam angkot
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        // menghapus penumpang dengan menggantinya menjadi undefined
        this.penumpang[i] = undefined;
        // penumpang bayar dan masukkan ke kas
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot('Gustut', ['Buduk', 'Denpasar'], [], 0);
var angkot2 = new Angkot('Yogha', ['Denpasar', 'Buduk'], [], 0);
