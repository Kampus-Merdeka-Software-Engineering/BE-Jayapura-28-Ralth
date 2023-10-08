const sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const db = new sequelize.Sequelize(process.env.DB_URL, {
  ssl: fs.readFileSync(path.join(__dirname, "../ca.pem")),
  dialect: "mysql",
  logging: true,
});

db.authenticate()
  .then(function () {
    console.log("Database terhubung....");
  })
  .catch(function (err) {
    console.log("Database gagal terhubung karena:", err);
  });

module.exports = db;
