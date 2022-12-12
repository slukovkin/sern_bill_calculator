import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
import router from "./router/router.js";
import { db_init } from "./db/db_init.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3003;

db_init();

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
  } catch (e) {
    console.log(`Server failed`, e);
  }
});
