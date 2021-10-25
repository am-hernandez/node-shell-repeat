const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");
const curl = require("./curl");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  // curl google.com => [curl, google.com]
  const [command, arg] = cmd.split(" ");
  switch (command) {
    case "pwd":
      return pwd(done);
    case "ls":
      return ls(done);
    case "cat":
      return cat(arg, done);
    case "curl":
      return curl(arg, done);
  }
});
