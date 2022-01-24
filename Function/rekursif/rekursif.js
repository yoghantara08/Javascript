function tampilAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return tampilAngka(n - 1);
}

tampilAngka(10);

function faktorial(n) {
  if (n === 0) return 1;

  return n * faktorial(n - 1);
}

console.log(faktorial(5));
console.log(faktorial(10));
