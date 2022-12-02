const Router = require("express");
const {
  addPriceToDatabase,
  getPriceFromDatabase,
  getLastSettingFromDatabase,
} = require("../controllers/setup.controller.js");

const {
  addElectroCounterToDatabase,
  getElectroLastCounterData,
} = require("../controllers/electro.controller.js");

const {
  addWaterCounterToDatabase,
  getWaterLastCounterData,
} = require("../controllers/water.controller.js");

const {
  addGazCounterToDatabase,
  getGazLastCounterData,
} = require("../controllers/gaz.controller.js");

const router = new Router();

router.get("/", getPriceFromDatabase);
router.post("/setup", addPriceToDatabase);
router.post("/setting", getLastSettingFromDatabase);

router.post("/electro/add", addElectroCounterToDatabase);
router.get("/electro/lastcounter", getElectroLastCounterData);

router.post("/water/add", addWaterCounterToDatabase);
router.get("/water/lastcounter", getWaterLastCounterData);

router.post("/gaz/add", addGazCounterToDatabase);
router.get("/gaz/lastcounter", getGazLastCounterData);

module.exports = router;
