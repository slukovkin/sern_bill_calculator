import { DataTypes } from "sequelize";
import { sequelize } from "../db/db_init.js";

export const SetupBase = sequelize.define(
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

export const ElectroCounter = sequelize.define(
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

export const WaterCounter = sequelize.define(
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

export const GazCounter = sequelize.define(
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
