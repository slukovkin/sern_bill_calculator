import Router from "express";
import * as setup from "../controllers/setup.controller.js";
import * as electro from "../controllers/electro.controller.js";
import * as water from "../controllers/water.controller.js";
import * as gaz from "../controllers/gaz.controller.js";
import * as data from "../controllers/alldata.controller.js"
import * as report from "../controllers/report_controller.js";

const router = new Router();

router.get("/", setup.addPriceToDatabase);
router.post("/setup", setup.addPriceToDatabase);
router.post("/setting", setup.getLastSettingFromDatabase);

router.post("/electro/add", electro.addElectroCounterToDatabase);
router.post("/electro/lastcounter", electro.getElectroLastCounterData);

router.post("/water/add", water.addWaterCounterToDatabase);
router.post("/water/lastcounter", water.getWaterLastCounterData);

router.post("/gaz/add", gaz.addGazCounterToDatabase);
router.post("/gaz/lastcounter", gaz.getGazLastCounterData);

router.get("/alldata", data.getAllData)
router.get("/report/:date", report.getReportData)
router.post("/create_report", report.createReport)

export default router;
