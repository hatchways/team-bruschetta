const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { uploadProfilePic } = require("../controllers/imageUpload");

router.route("/profilepic").post(protect, uploadProfilePic);

module.exports = router;
