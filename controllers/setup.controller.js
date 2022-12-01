const express = require("express");
const Database = require("../models/database.model.js");

class Setup {
  addPriceToDatabase = async (req, res) => {
    try {
      const data = req.body;
      const { eprice, wprice, gprice } = data;
      const setup = await Database.SetupBase.build({ eprice, wprice, gprice });
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
        err
      );
      // return res.json()
    } catch (err) {
      res.json({
        message: "Ошибка запроса",
      });
    }
  };
  getPriceFromDatabase = async (req, res) => {
    try {
      const data = await Database.SetupBase.findAll();
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
  getLastPriceFromDatabase = async (req, res) => {
    try {
      const id = req.body;
      const price = await Database.SetupBase.findOne({where: id});
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
}

module.exports = new Setup();
