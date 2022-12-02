const { sequelize } = require("../db/db_init.js");
const { WaterCounter } = require("../models/db_modls.js");
const { searchMaxId } = require("../utils/utilites.js");

// запись предыдущего и текущего счетчиков в базу
// запись суммы оплаты

const addWaterCounterToDatabase = async (req, res) => {
  try {
    const { counter_prev, counter_current, sum } = req.body;
    const data = await WaterCounter.build({
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

const getWaterLastCounterData = async (req, res) => {
  try {
    // const data = await ElectroCounter.findOne({
    //   order: sequelize.fn("max", sequelize.col("id")),
    // });
    const data = await WaterCounter.findAll();
    const id = searchMaxId(data);
    const lastCounter = await WaterCounter.findOne({ where: id });
    if (!lastCounter) {
      return res.json({
        message: "Данные не найдены",
      });
    }
    res.json(lastCounter);
  } catch (err) {
    res.json({
      message: "Ошибка запроса данных",
    });
  }
};

module.exports = {
  addWaterCounterToDatabase,
  getWaterLastCounterData,
};
