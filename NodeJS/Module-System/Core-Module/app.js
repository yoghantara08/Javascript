// Core Module

// 1. File System
const fs = require("fs");

// menuliskan string ke file (synchronous)
try {
  fs.writeFileSync("data/test.txt", "Hello World secara synchronus!");
} catch (e) {
  console.log(e);
}

// menuliskan string ke file (asynchrounous)
fs.writeFile("data/test2.txt", "Hello World secara asynchronus!", (err) => {
  console.log(err);
});

// membaca isi file (synchronous)
const readFileSync = fs.readFileSync("data/test.txt", "utf-8");
console.log(readFileSync);

// membaca isi file (asynchronous)
fs.readFile("data/test2.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
