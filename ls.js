const fs = require("fs");

module.exports = function (done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Error here");
    } else {
      done(files.join("\n"));
    }
  });
};
