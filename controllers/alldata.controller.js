import { sequelize } from "../db/db_init.js";

export const getAllData = async (req, res) => {
  try {
    const query = "select * from ";
    const el = await sequelize.query(
      query + "electro " + "order by id desc limit 1"
    );
    const wt = await sequelize.query(
      query + "water " + "order by id desc limit 1"
    );
    const gz = await sequelize.query(
      query + "gaz " + "order by id desc limit 1"
    );
    const st = await sequelize.query(
      query + "setup " + "order by id desc limit 1"
    );
    const data = [...el, ...wt, ...gz, ...st];

    if (!data) return;
    res.json(data);
  } catch (err) {
    res.status(400).json({
      message: "Ошибка запроса данных",
    });
  }
};
