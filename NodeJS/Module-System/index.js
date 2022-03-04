// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); //local module
// const moment = require("moment"); // Third party module / NPM Module / node_modules

const coba = require("./coba");

console.log(coba.cetakNama("Yoghantara"));
console.log(coba.PI);
console.log(coba.mahasiswa.cetakMhs());
console.log(new coba.Orang());
