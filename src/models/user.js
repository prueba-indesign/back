const sql = require("mssql");
const config = require("../../src/dbconfig");
let userModel = {};

sql.connect(config, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection to db succesfull");
  }
});

/// UserModel Methods

userModel.getAllData = (params, callback) => {
  // console.log(params);
  // let details = {
  //   stname: req.body.stname,
  //   course: req.body.course,
  //   fee: req.body.fee,
  // };
  // let sql = "INSERT INTO student SET ?";
  // db.query(sql, details, (error) => {
  //   if (error) {
  //     res.send({ status: false, message: "Student created Failed" });
  //   } else {
  //     res.send({ status: true, message: "Student created successfully" });
  //   }
  // });

  // create Request object
  var request = new sql.Request();

  // query to the database and get the records
  request.query(
    "select * from dbo.consumo_por_tramo",
    function (err, recordset) {
      if (err) console.log(err);

      // send records as a response
      console.log(recordset);
      callback(null, recordset);
    }
  );
};

userModel.getConsumoTramo = (params, callback) => {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Crear objeto de solicitud
    let request = new sql.Request();

    // Fecha de inicio y fin
    let startDate = params.startDate;
    let endDate = params.endDate;
    console.log("Fechas", params, startDate, endDate);

    // Consulta SQL
    let consultaSql = `SELECT * FROM dbo.costo_por_tramo WHERE fecha BETWEEN '${startDate}' AND '${endDate}'`;

    // Ejecutar consulta SQL
    request.query(consultaSql, function (err, recordset) {
      if (err) console.log(err);

      // Imprimir datos
      console.log(recordset);
      callback(null, recordset);
    });
  });
};

userModel.getCostoTramo = (params, callback) => {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Crear objeto de solicitud
    let request = new sql.Request();

    // Fecha de inicio y fin
    let startDate = params.startDate;
    let endDate = params.endDate;
    console.log("Fechas", params, startDate, endDate);

    // Consulta SQL
    let consultaSql = `SELECT * FROM dbo.costo_por_tramo WHERE fecha BETWEEN '${startDate}' AND '${endDate}'`;

    // Ejecutar consulta SQL
    request.query(consultaSql, function (err, recordset) {
      if (err) console.log(err);

      // Imprimir datos
      console.log(recordset);
      callback(null, recordset);
    });
  });
};

userModel.getPerdidaTramo = (params, callback) => {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Crear objeto de solicitud
    let request = new sql.Request();

    // Fecha de inicio y fin
    let startDate = params.startDate;
    let endDate = params.endDate;
    console.log("Fechas", params, startDate, endDate);

    // Consulta SQL
    let consultaSql = `SELECT * FROM dbo.costo_por_tramo WHERE fecha BETWEEN '${startDate}' AND '${endDate}'`;

    // Ejecutar consulta SQL
    request.query(consultaSql, function (err, recordset) {
      if (err) console.log(err);

      // Imprimir datos
      console.log(recordset);
      callback(null, recordset);
    });
  });
};

module.exports = userModel;
