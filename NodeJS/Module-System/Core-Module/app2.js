const fs = require("fs");
// 2. Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Umur anda: ", (umur) => {
    const contact = { nama, umur };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    try {
      fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    } catch (e) {
      console.log(e);
    }
    console.log("Terimakasih sudah mengisi data.");
    rl.close();
  });
});
