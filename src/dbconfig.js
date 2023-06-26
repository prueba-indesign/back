const config = {
  user: "sa",
  password: "prueba123*", // Write the password you use for authentication with SQL 
  server: "localhost",
  database: "pruebaDB",
  port: 1433,
  options: {
    // encrypt: true, // Use this if you're on Windows Azure
    trustedConnection: true,
    trustServerCertificate: true
  },
};

module.exports = config;
