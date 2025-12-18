const fs = require("fs");

const path = require("path");

// запись в файл
function writeFileSync(filePath, data) {
  fs.writeFileSync(filePath, data);
}

// чтение из файла
function readFileSync(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

// перезапись файла
function rewriteFileSync(filePath, data) {
  fs.writeFileSync(filePath, data);
}

// удаление информации из файла
function clearFileSync(filePath) {
  fs.writeFileSync(filePath, "");
}

// удаление шума (цифры + верхний регистр → нижний)
function cleanNoiseSync(filePath) {
  let data = fs.readFileSync(filePath, "utf-8");
  data = data.replace(/[0-9]/g, "").toLowerCase();
  fs.writeFileSync(filePath, data);
}

// копирование файла
function copyFileSync(from, to) {
  fs.copyFileSync(from, to);
}

async function writeFileAsync(filePath, data) {
  await fs.promises.writeFile(filePath, data);
}

async function readFileAsync(filePath) {
  return await fs.promises.readFile(filePath, "utf-8");
}

async function rewriteFileAsync(filePath, data) {
  await fs.promises.writeFile(filePath, data);
}

async function clearFileAsync(filePath) {
  await fs.promises.writeFile(filePath, "");
}

async function cleanNoiseAsync(filePath) {
  let data = await fs.promises.readFile(filePath, "utf-8");
  data = data.replace(/[0-9]/g, "").toLowerCase();
  await fs.promises.writeFile(filePath, data);
}

async function copyFileAsync(from, to) {
  await fs.promises.copyFile(from, to);
}

function createDirSync(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDirSync(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
}

async function createDirAsync(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function removeDirAsync(dirPath) {
  await fs.promises.rm(dirPath, { recursive: true, force: true });
}

// вывод путей ко всем файлам проекта (кроме служебных)
function listProjectFiles(dir = process.cwd(), files = []) {
  const ignore = [
    "node_modules",
    ".git",
    ".env",
    ".env.development",
    ".env.production",
    ".env.domain",
  ];

  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (ignore.includes(item)) continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      listProjectFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

// удаление всего проекта, кроме служебных файлов
function clearProject(dir = process.cwd()) {
  const ignore = [
    "node_modules",
    ".git",
    ".env",
    ".env.development",
    ".env.production",
    ".env.domain",
    "package.json",
    "package-lock.json",
  ];

  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (ignore.includes(item)) continue;

    const fullPath = path.join(dir, item);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

module.exports = {
  // files sync
  writeFileSync,
  readFileSync,
  rewriteFileSync,
  clearFileSync,
  cleanNoiseSync,
  copyFileSync,

  // files async
  writeFileAsync,
  readFileAsync,
  rewriteFileAsync,
  clearFileAsync,
  cleanNoiseAsync,
  copyFileAsync,

  // dirs sync
  createDirSync,
  removeDirSync,

  // dirs async
  createDirAsync,
  removeDirAsync,

  // project
  listProjectFiles,
  clearProject,
};
