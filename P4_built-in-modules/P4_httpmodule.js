// Template literals can have HTML code snippets inside them

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage!!");
  } else if (req.url === "/about") {
    res.end("Welcome in the about section");
  } else {
    res.end(`
    <h1>My name</h1>
      <dir>My name is</dir>
      <a href = "/">Back to homepage</a>
    `);
  }
});

server.listen("5000");
