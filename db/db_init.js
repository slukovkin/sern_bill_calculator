const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db_app.sqlite",
});

async function db_init() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connecting OK");
  } catch (e) {
    console.log("Database connecting False");
    console.log(e);
  }
}

module.exports = { db_init, sequelize };
