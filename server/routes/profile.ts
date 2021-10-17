import express from "express";
import { allProfiles, 
        getProfileById, 
        addProfile, 
        updateProfile }
 from "../controllers/profile";
 import protect from "../middleware/auth";

 const router = express.Router();
 
router.route("/").get(allProfiles);

router.route("/:id").get( getProfileById);

router.route("/").post( addProfile);

router.route("/:id").put(protect, updateProfile);

module.exports = router;
