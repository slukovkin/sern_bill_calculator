import { DataTypes } from "sequelize"
import { sequelize } from "../db/db_init.js"

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
)

export const ElectroCounter = sequelize.define(
  "electro",
  {
    counterPrev: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    counterCurr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    modelName: "electro",
    freezeTableName: true,
  }
)

export const WaterCounter = sequelize.define(
  "water",
  {
    counterPrev: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    counterCurr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    modelName: "water",
    freezeTableName: true,
  }
)

export const GazCounter = sequelize.define(
  "gaz",
  {
    counterPrev: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    counterCurr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    modelName: "gaz",
    freezeTableName: true,
  }
)

export const Report = sequelize.define(
  "report",
  {
    date: {
      type: DataTypes.STRING,
    },
    electro_data: {
      type: DataTypes.JSON,
    },
    water_data: {
      type: DataTypes.JSON,
    },
    gaz_data: {
      type: DataTypes.JSON,
    },
  },
  {
    timestamps: true,
    modelName: "report",
  }
)

// electro_data: {
//   type: {
//     counter_prev: DataTypes.INTEGER,
//     counter_current: DataTypes.INTEGER,
//     quantity: DataTypes.FLOAT,
//     price: DataTypes.FLOAT,
//     payment: DataTypes.FLOAT
//   }
// },
// water_data: {
//   type: {
//     counter_prev: DataTypes.INTEGER,
//     counter_current: DataTypes.INTEGER,
//     quantity: DataTypes.FLOAT,
//     price: DataTypes.FLOAT,
//     payment: DataTypes.FLOAT
//   }
// },
// gaz_data: {
//   type: {
//     counter_prev: DataTypes.INTEGER,
//     counter_current: DataTypes.INTEGER,
//     quantity: DataTypes.FLOAT,
//     price: DataTypes.FLOAT,
//     payment: DataTypes.FLOAT
//   }
// },
