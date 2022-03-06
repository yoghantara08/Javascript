const { rejects } = require("assert");
const fs = require("fs");
// 2. Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan nama anda: ", (nama) => {
      resolve(nama);
    });
  });
};
const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan email anda: ", (email) => {
      resolve(email);
    });
  });
};
const pertanyaan3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan no hp anda: ", (nohp) => {
      resolve(nohp);
    });
  });
};

const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
  const nohp = await pertanyaan3();

  const contact = { nama, email, nohp };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  try {
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  } catch (e) {
    console.log(e);
  }
  console.log("Terimakasih sudah mengisi data.");
  rl.close();
};

main();
