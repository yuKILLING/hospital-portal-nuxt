const Router = require("express");
const router = new Router();
const UploadController = require("../helpers/uploadHelper");
const authMiddleware = require("../helpers/authMiddleware");

router.post("/uploadFile", authMiddleware, UploadController.uploadFile);
// router.get('/download', UploadController.download);

module.exports = router;

