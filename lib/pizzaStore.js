const { Sequelize } = require("sequelize");

const sequalize = new Sequelize({
  dialect: "postgres",
  host: "pizzalvrdb.cy03nvigqg4w.us-east-1.rds.amazonaws.com",
  username: "postgres",
  password: "Mansanita321.",
});
// DB Table
const Pizza = sequalize.define("pizza", {
  id: {
    primaryKey: true,
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  toppings: {
    type: Sequelize.STRING,
  },
  img: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  created: {
    type: Sequelize.BIGINT,
  },
});

Pizza.sync();

module.exports = Pizza;
