const Router = require("express");
const router = new Router();
const HospitalController = require("../controller/hospitals.controller");
const DeviceController = require("../controller/device.controller");
const authMiddleware = require("../helpers/authMiddleware");

// HOSPITALS
router.post("/addhospital", authMiddleware, HospitalController.addHospital);
router.get("/gethospitals", HospitalController.getHospitals);
router.get("/getallhospitals", HospitalController.getAllHospitals);
router.delete("/deletehospital", authMiddleware, HospitalController.deleteHospital);

// DEVICES
router.post("/adddevice", authMiddleware, DeviceController.addDevice);
router.get("/getalldevices", DeviceController.getAllDeviceByHospitalId);
router.get("/getdevicebyhospitalid", DeviceController.getDeviceByHospitalId);
router.delete("/deletedevice", authMiddleware, DeviceController.deleteDevice);
router.get('/getdevicelink', DeviceController.getDeviceLink);

module.exports = router;
