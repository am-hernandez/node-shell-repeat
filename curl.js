const request = require("request");

module.exports = function (url, done) {
  if (!url.includes("http")) {
    url = "https://" + url;
  }
  request(url, function (error, response, body) {
    console.error("error:", error);
    done(body);
  });
};
