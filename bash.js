const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");
const curl = require("./curl")

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  // curl google.com => [curl, google.com]
  const [command, arg] = cmd.split(" ");
  switch (command) {
    case "pwd":
      return pwd();
    case "ls":
      return ls();
    case "cat":
      return cat(arg);
      case "curl":
        return curl(arg);
  }
});
