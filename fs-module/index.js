const fs = require("fs");

function writeFileSync(path, data) {
  fs.writeFileSync(path, data);
}

async function writeFileAsync(path, data) {
  await fs.promises.writeFile(path, data);
}

function readFileSync(path) {
  return fs.readFileSync(path, "utf-8");
}

async function readFileAsync(path) {
  return await fs.promises.readFile(path, "utf-8");
}

module.exports = {
  writeFileSync,
  writeFileAsync,
  readFileSync,
  readFileAsync,
};
