const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db_init");

const ElectroCounter = sequelize.define(
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
  }
);

sequelize.sync();

module.exports = {
  ElectroCounter,
};
