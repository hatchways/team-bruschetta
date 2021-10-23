const express = require("express");
const router = express.Router();
const { allProfiles, 
        getProfileById, 
        addProfile, 
        updateProfile }
 = require("../controllers/profile");
 const { validateProfile } = require("../validate");
 const protect =  require("../middleware/auth");

router.route("/").get(allProfiles);

router.route("/:id").get(getProfileById);

router.route("/").post(protect, validateProfile, addProfile);

router.route("/:id").patch(protect, updateProfile);

module.exports = router;
