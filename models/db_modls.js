const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db_init");

const SetupBase = sequelize.define(
  "SetupBase",
  {
    eprice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    wprice: {
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
    freezeTableName: true,
  }
);

const WaterCounter = sequelize.define(
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

const GazCounter = sequelize.define(
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
    freezeTableName: true,
  }
);

module.exports = {
  SetupBase,
  ElectroCounter,
  WaterCounter,
  GazCounter,
};
