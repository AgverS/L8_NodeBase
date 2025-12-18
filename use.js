const fetchData = require("./modules/fetchData");
const sortStrings = require("./modules/sortStrings");
const fsModule = require("./modules/fileSystem");

(async () => {
  const { data, error } = await fetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error) {
    console.error("Ошибка загрузки данных:", error);
    return;
  }

  const names = sortStrings(data.map((u) => u.name));
  const emails = data.map((u) => u.email);

  fsModule.createDirSync("users");

  fsModule.writeFileSync("users/names.txt", names.join("\n"));
  fsModule.writeFileSync("users/emails.txt", emails.join("\n"));

  console.log("Файлы users/names.txt и users/emails.txt созданы");
})();

console.log("Файлы проекта:");
console.log(fsModule.listProjectFiles());
