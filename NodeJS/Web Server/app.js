const http = require("http");
const port = 3000;

const server = http.createServer((request, respond) => {
  respond.write("Hello World");
  respond.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
});
