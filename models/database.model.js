const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db_init.js");

class Database {
  SetupBase = sequelize.define(
    "SetupBase",
    {
      wprice: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      eprice: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      gprice: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      modelName: "SetupBase",
      freezeTableName: true,
    }
  );
  ElectroCounter = sequelize.define(
    "Electro",
    {
      counter_prev: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      counter_current: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sum: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      modelName: "Electro",
      freezeTableName: true,
    }
  );
  WaterCounter = sequelize.define(
    "Water",
    {
      counter_prev: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      counter_current: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sum: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      modelName: "Water",
      freezeTableName: true,
    }
  );
  GazCounter = sequelize.define(
    "Gaz",
    {
      counter_prev: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      counter_current: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sum: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      modelName: "Gaz",
      freezeTableName: true
    }
  );
}

module.exports = new Database();
