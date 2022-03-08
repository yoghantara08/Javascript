const fs = require("fs");
const http = require("http");
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const url = req.url;
  switch (url) {
    case "/about":
      renderHTML("./about.html", res);
      break;
    default:
      renderHTML("index.html", res);
      break;
  }
  // if (url === "/about") {
  //   renderHTML("./about.html", res);
  // } else {
  //   renderHTML("index.html", res);
  // }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
});
