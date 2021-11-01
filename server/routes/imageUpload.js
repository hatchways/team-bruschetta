const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { uploadProfilePic } = require("../controllers/imageUpload");

router.route("/profile-pic").post(protect, uploadProfilePic);

module.exports = router;
