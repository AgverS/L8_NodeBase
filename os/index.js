import os from "os";

// a) основная информация об ОС
export function showOSInfo() {
  console.log("Платформа:", os.platform());
  console.log("Свободная память (GB):", (os.freemem() / 1024 ** 3).toFixed(2));
  console.log("Домашняя директория:", os.homedir());
  console.log("Имя хоста:", os.hostname());
  console.log("Сетевые интерфейсы:", os.networkInterfaces());
}

// b) проверка свободной памяти
export function checkFreeMemory() {
  const freeGB = os.freemem() / 1024 ** 3;
  if (freeGB > 4) {
    console.log("Свободной памяти больше 4GB ");
  } else {
    console.log("Свободной памяти меньше 4GB ");
  }
}

// c) доступ по MODE
if (process.env.MODE === "admin") {
  showOSInfo();
  checkFreeMemory();
}
