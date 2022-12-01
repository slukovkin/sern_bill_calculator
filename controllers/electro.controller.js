const { sequelize } = require("../db/db_init.js");
const { ElectroCounter } = require("../models/db_modls.js");

// запись предыдущего и текущего счетчиков в базу
// запись суммы оплаты

const addCounterToDatabase = async (req, res) => {
  try {
    const { counter_prev, counter_current, sum } = req.body;
    const data = await ElectroCounter.build({
      counter_prev,
      counter_current,
      sum,
    });

    if (!data) {
      return res.json({
        message: "Ошибка данных",
      });
    }

    await data.save();
    res.json({
      message: "Данные успешно сохранены",
    });
  } catch (err) {
    res.json(
      {
        message: "Ошибка запроса данных",
      },
      err
    );
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await ElectroCounter.findOne({
      order: sequelize.fn("max", sequelize.col("id")),
    });
    return res.json(data);
  } catch (err) {
    res.json({
      message: "Ошибка запроса данных",
    });
  }
};

module.exports = {
  addCounterToDatabase,
  getAllData,
};
