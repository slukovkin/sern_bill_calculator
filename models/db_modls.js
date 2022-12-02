const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db_init");

const SetupBase = sequelize.define(
  "setup",
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
    modelName: "setup",
    freezeTableName: true,
  }
);

const ElectroCounter = sequelize.define(
  "electro",
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
    modelName: "electro",
    freezeTableName: true,
  }
);

const WaterCounter = sequelize.define(
  "water",
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
    modelName: "water",
    freezeTableName: true,
  }
);

const GazCounter = sequelize.define(
  "gaz",
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
    modelName: "gaz",
    freezeTableName: true,
  }
);

module.exports = {
  SetupBase,
  ElectroCounter,
  WaterCounter,
  GazCounter,
};
