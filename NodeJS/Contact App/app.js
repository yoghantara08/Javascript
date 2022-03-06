const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.pertanyaan("Masukkan nama anda: ");
  const email = await contacts.pertanyaan("Masukkan email anda: ");
  const noHP = await contacts.pertanyaan("Masukkan no HP anda: ");

  contacts.simpanContact(nama, email, noHP);
};

main();
