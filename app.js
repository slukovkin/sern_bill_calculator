const express = require("express");
const dotenv = require("dotenv").config();
const { db_init } = require("./db/db_init.js");
// const { SetupBase } = require("./models/setup.model.js");
// const { ElectroCounter } = require("./models/electro.model.js");
const Database = require("./models/database.model.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

db_init();
Database.SetupBase.sync();
Database.ElectroCounter.sync();
Database.WaterCounter.sync();
Database.GazCounter.sync();

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
  } catch (e) {
    console.log(`Server failed`, e);
  }
});
