const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<strong><h1 style='color:red'>Hello Shikhar.....!!!...!!</h1></strong>"
    );
    res.end();
  })
  .listen(40000, () => {
    console.log("Server is running at 40000");
  });
