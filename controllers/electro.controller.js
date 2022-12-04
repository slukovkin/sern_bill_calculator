import { sequelize } from "../db/db_init.js";
import { ElectroCounter } from "../models/db_models.js";
import { searchMaxId } from "../utils/utilites.js";

// запись предыдущего и текущего счетчиков в базу
// запись суммы оплаты

export const addElectroCounterToDatabase = async (req, res) => {
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

export const getElectroLastCounterData = async (req, res) => {
  try {
    // const data = await ElectroCounter.findOne({
    //   order: sequelize.fn("max", sequelize.col("id")),
    // });
    const data = await ElectroCounter.findAll();
    const id = searchMaxId(data);
    const lastCounter = await ElectroCounter.findOne({ where: id });
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
