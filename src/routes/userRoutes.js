const User = require("../models/user");

module.exports = function (app) {
  app.get("/getAllData", (req, res) => {
    (res.header = "Access-Control-Allow-Origin"), "*";
    (res.header = "Access-Control-Allow-Credentials"), true;
    (res.header = "Access-Control-Allow-Methods"),
      "POST, GET, PUT, DELETE, OPTIONS";
    let params = req.body;

    User.getAllData(params, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get("/getConsumoTramo", (req, res) => {
    (res.header = "Access-Control-Allow-Origin"), "*";
    (res.header = "Access-Control-Allow-Credentials"), true;
    (res.header = "Access-Control-Allow-Methods"),
      "POST, GET, PUT, DELETE, OPTIONS";
    let params = req.query;

    User.getConsumoTramo(params, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get("/getCostoTramo", (req, res) => {
    (res.header = "Access-Control-Allow-Origin"), "*";
    (res.header = "Access-Control-Allow-Credentials"), true;
    (res.header = "Access-Control-Allow-Methods"),
      "POST, GET, PUT, DELETE, OPTIONS";
      let params = req.query;

    User.getCostoTramo(params, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get("/getPerdidaTramo", (req, res) => {
    (res.header = "Access-Control-Allow-Origin"), "*";
    (res.header = "Access-Control-Allow-Credentials"), true;
    (res.header = "Access-Control-Allow-Methods"),
      "POST, GET, PUT, DELETE, OPTIONS";
      let params = req.query;

    User.getPerdidaTramo(params, (err, data) => {
      res.status(200).json(data);
    });
  });
};
