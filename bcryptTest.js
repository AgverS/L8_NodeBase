const bcrypt = require("bcrypt");

const passwords = [
  "password1",
  "password2",
  "password3",
  "password4",
  "password5",
  "password6",
  "password7",
  "password8",
  "password9",
  "password10",
  "password11",
  "password12",
  "password13",
];

async function hashPassword(password, index) {
  const label = `Пароль ${index + 1}`;

  console.time(label);
  await bcrypt.hash(password, 10);
  console.timeEnd(label);
}

async function hashAllPasswords() {
  await Promise.all(
    passwords.map((password, index) => hashPassword(password, index))
  );
}

hashAllPasswords();
