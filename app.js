const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const router = require("./router/router.js");
const { db_init } = require("./db/db_init.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
const PORT = process.env.PORT || 5000;

db_init();

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
  } catch (e) {
    console.log(`Server failed`, e);
  }
});
