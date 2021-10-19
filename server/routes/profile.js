const express = require("express");
const router = express.Router();
const { allProfiles, 
        getProfileById, 
        addProfile, 
        updateProfile }
 = require("../controllers/profile");
 const { validateProfile, validateProfileId } = require("../validate");
 const protect =  require("../middleware/auth");

router.route("/").get(allProfiles);

router.route("/:id").get(validateProfileId, getProfileById);

router.route("/").post(validateProfile, addProfile);

router.route("/:id").put(protect, validateProfileId, updateProfile);

module.exports = router;
