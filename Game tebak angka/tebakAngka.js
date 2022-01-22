var lagi = true;
while (lagi) {
  // angka random 1-10
  var comp = Math.floor(Math.random() * 10) + 1;

  // Menebak 3x kesempatan
  var hasil = '';
  for (var kesempatan = 3; kesempatan > 0; kesempatan--) {
    var player = prompt('Masukkan salah satu angka 1 - 10. ada ' + kesempatan + ' kali kesempatan');
    var sisaKesempatan = kesempatan - 1;
    if (player == comp) {
      hasil = alert('Jawaban kamu benar');
      kesempatan = 0;
    } else if (player < comp) {
      if (sisaKesempatan == 0) {
        hasil = alert('Jawaban kamu salah. Yang benar adalah ' + comp);
      } else {
        hasil = alert('Jawaban kamu kekecilan. ' + sisaKesempatan + ' kesempatan tersisa');
      }
    } else if (player > comp) {
      if (sisaKesempatan == 0) {
        hasil = alert('Jawaban kamu salah. Yang benar adalah ' + comp);
      } else {
        hasil = alert('Jawaban kamu kebesaran. ' + sisaKesempatan + ' kesempatan tersisa');
      }
    }
  }
  lagi = confirm('lagi?');
}
alert('Terima Kasih');

console.log(comp);
