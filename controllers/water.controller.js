import { sequelize } from "../db/db_init.js";
import { WaterCounter } from "../models/db_models.js";
import { searchMaxId } from "../utils/utilites.js";

// запись предыдущего и текущего счетчиков в базу
// запись суммы оплаты

export const addWaterCounterToDatabase = async (req, res) => {
  try {
    const { counterPrev, counterCurr, payment } = req.body;
    const data = await WaterCounter.build({
      counterPrev,
      counterCurr,
      payment,
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

export const getWaterLastCounterData = async (req, res) => {
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
