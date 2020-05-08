const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {


});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => `Server listening on port ${PORT}`);
