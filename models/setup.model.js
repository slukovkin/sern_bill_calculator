const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db_init.js");

const SetupBase = sequelize.define(
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
  }
);

sequelize.sync();

// console.log(Setting === sequelize.models.Setting);

module.exports = {
  SetupBase,
};
