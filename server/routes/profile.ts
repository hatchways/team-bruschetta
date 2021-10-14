const express = require("express");
const router = express.Router();
const { allProfiles, 
        getProfileById, 
        addProfile, 
        updateProfile } =
 require("../controllers/profile.ts");
 

router.route("/").get( allProfiles );

router.route("/:id").get( getProfileById );

router.route("/").post( addProfile );

router.route("/:id").put( updateProfile );

module.exports = router;
