const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"));
    return false;
  }
  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email yang anda masukkan tidak valid!"));
      return false;
    }
  }
  // cek no HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return false;
  }

  contacts.push(contact);

  try {
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  } catch (e) {
    console.log(e);
  }
  console.log(chalk.blue.inverse("Terimakasih sudah mengisi data."));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyanBright.bold("Daftar Contact:"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.redBright.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyanBright.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
};

module.exports = { simpanContact, listContact, detailContact };
