// Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'Gustut';

// 1. Creation Phase pada Global Context
// Mengecek apakah ada variable / function yg ada di codingannya
// kalo ada -> nama var = undefined
// kalo ada -> nama function = fn()
// konsep ini disebut "Hoisting"
// window = global object
// this = window

// 2. Execution Phase
// Mengeksekusi program baris perbaris dari atas kebawah

console.log(sayHello());

var Nama = 'Yoghantara';
var umur = 20;

function sayHello() {
  return `Halo, nama saya ${Nama}, umur ${umur}`;
}
// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting (local)
