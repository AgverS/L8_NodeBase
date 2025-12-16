import "dotenv/config";
import "./os/index.js";

console.log("MODE:", process.env.MODE);
console.log("Имя:", process.env.NAME);
console.log("Фамилия:", process.env.SURNAME);
console.log("Группа:", process.env.GROUP);
console.log("Номер в списке:", process.env.LIST_NUMBER);
