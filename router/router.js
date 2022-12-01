const Router = require("express");
const {
  addPriceToDatabase,
  getPriceFromDatabase,
  getLastPriceFromDatabase,
} = require("../controllers/setup.controller.js");

const {
  addCounterToDatabase,
  getAllData,
} = require("../controllers/electro.controller.js");

const router = new Router();

router.get("/", getPriceFromDatabase);
router.post("/setup", addPriceToDatabase);
router.post("/id", getLastPriceFromDatabase);

router.post("/electro/add", addCounterToDatabase);
router.post("/electro", getAllData);

module.exports = router;
