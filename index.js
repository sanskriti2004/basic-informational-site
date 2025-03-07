const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const requiredPath = url.parse(req.url).pathname;

    if (requiredPath === "/") {
      fs.readFile("./index.html", (error, data) => {
        res.end(data);
      });
    } else if (requiredPath === "/about-me") {
      fs.readFile("./about-me.html", (error, data) => {
        res.end(data);
      });
    } else if (requiredPath === "/contact-me") {
      fs.readFile("./contact-me.html", (error, data) => {
        res.end(data);
      });
    } else {
      fs.readFile("./404.html", (error, data) => {
        res.end(data);
      });
    }
  })
  .listen(8000);
