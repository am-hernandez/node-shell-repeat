const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const [command, fileName] = cmd.split(" ");
  switch (command) {
    case "pwd":
      return pwd();
    case "ls":
      return ls();
    case "cat":
      return cat(fileName);
  }
});
