const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const server = express();

server.use(cors({ origin: "*" }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", upload.single("file"), (req, res) => {
  console.log(req.method);
  if (req.method == "POST") {
    console.log(req.body);
    console.log(req.headers);
  }
  res.send("Hello world");
});

server.listen(7100, () => console.log("Server listening on port 7100"));
