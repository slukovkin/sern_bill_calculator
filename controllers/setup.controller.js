const express = require("express");
const { SetupBase } = require("../models/db_modls");
const { searchMaxId } = require("../utils/utilites");

const addPriceToDatabase = async (req, res) => {
  try {
    const { eprice, wprice, gprice } = req.body;
    const setup = await SetupBase.build({ eprice, wprice, gprice });
    if (!setup) {
      return res.json({
        message: "Ошибка записи данных",
      });
    }
    await setup.save();
    res.json({
      message: "Данные успешно сохранены",
    });
  } catch (err) {
    res.json(
      {
        message: "Ошибка запроса",
      },
      err
    );
  }
};
const getPriceFromDatabase = async (req, res) => {
  try {
    const data = await SetupBase.findAll();
    res.json(data);
  } catch (err) {
    res.json(
      {
        message: "Ошибка запроса данных",
      },
      err
    );
  }
};
const getLastSettingFromDatabase = async (req, res) => {
  try {
    const data = await SetupBase.findAll();
    const id = searchMaxId(data);
    const lastSetting = await SetupBase.findOne({ where: id });
    if (!lastSetting) {
      return res.json({
        message: "Данные не найдены",
      });
    }
    res.json(lastSetting);
  } catch (err) {
    res.json(
      {
        message: "Ошибка запроса данных",
      },
      err
    );
  }
};

module.exports = {
  addPriceToDatabase,
  getPriceFromDatabase,
  getLastSettingFromDatabase,
};
