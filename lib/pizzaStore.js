const { Sequelize } = require("sequelize");

const sequalize = new Sequelize({
  dialect: "postgres",
  host: "pizzalvrdb.cy03nvigqg4w.us-east-1.rds.amazonaws.com",
  username: "postgres",
  password: "Mansanita321.",
});
