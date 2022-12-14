import { sequelize } from "../db/db_init.js";

export const getAllData = async (req, res) => {
  try {
    const query = "select * from ";
    const [el, metael] = await sequelize.query(
      query + "electro " + "order by id desc limit 1"
    );
    const [wt, metawt] = await sequelize.query(
      query + "water " + "order by id desc limit 1"
    );
    const [gz, metagz] = await sequelize.query(
      query + "gaz " + "order by id desc limit 1"
    );
    const [st, metast] = await sequelize.query(
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
