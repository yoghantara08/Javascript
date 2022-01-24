// var kubus1 = 8;
// var kubus2 = 3;
// var volume1;
// var volume2;
// var total;

// volume1 = kubus1 * kubus1 * kubus1;
// volume2 = kubus2 * kubus2 * kubus2;

// total = volume1 + volume2;

// alert(total);

function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(5, 7));
console.log(jumlahVolumeDuaKubus(4, 15));
