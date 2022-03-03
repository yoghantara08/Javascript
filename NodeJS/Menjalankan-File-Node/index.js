console.log("Ini adalah file utama NodeJS");
console.log("Cukup ketik 'node .'\n");

require("./hello-world");

const cetakNama = require("./module-export");
console.log(cetakNama("Gustut"));
