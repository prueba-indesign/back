const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.json());

//settings
server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PATCH,GET,HEAD,OPTIONS,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

server.set("port", process.env.PORT || 3000);

// middlewares
// server.use(morgan("dev"));
server.use(bodyParser.json());

// for parsing application/xwww-
server.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
// server.use(upload.array());
// server.use(express.static("public"));

// routes
require("./routes/userRoutes")(server);

server.listen(server.get("port"), () => {
  console.log("server on port" + server.get("port"));
  // /*if (err) {
  //     throw err;
  // } else {
  //     console.log ('server on port'+ server.PORT)
  //      process.env.NODE_ENV
  // } */
});
