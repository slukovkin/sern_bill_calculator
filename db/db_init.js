import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db_app.sqlite",
});

export async function db_init() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connecting OK");
  } catch (e) {
    console.log("Database connecting False");
    console.log(e);
  }
}
