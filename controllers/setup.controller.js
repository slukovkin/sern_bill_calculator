const express = require("express");
const { SetupBase } = require("../models/db_modls.js");

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
    res.json(
      {
        message: "Данные успешно сохранены",
      },
    );
  } catch (err) {
    res.json({
      message: "Ошибка запроса",
    }, err);
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
const getLastPriceFromDatabase = async (req, res) => {
  try {
    const id = req.body;
    const price = await SetupBase.findOne({ where: id });
    if (!price) {
      return res.json({
        message: "Данные не найдены",
      });
    }
    res.json(price);
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
  getLastPriceFromDatabase,
};
