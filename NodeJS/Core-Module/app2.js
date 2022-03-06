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

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Umur anda: ", (umur) => {
    const contact = { nama, umur };
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
  });
});
