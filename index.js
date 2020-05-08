const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extName = path.extname(filePath);
  let contentType = "text/html";

  switch(extName){
    // Add more extenstions if needed
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  if (contentType == "text/html" && extName == "") filePath += ".html";
  console.log(`Serving ${filePath}`);

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => `Server listening on port ${PORT}`);
