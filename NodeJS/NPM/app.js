const validator = require("validator");

// cek apakah email
console.log(validator.isEmail("gustut@tes.com"));

// cek apakah nomor telepon, parameter ke 2 = negara
console.log(validator.isMobilePhone("083123456", "id-ID"));

// cek apakah angka / nomor
console.log(validator.isNumeric("123456", "id-ID"));
