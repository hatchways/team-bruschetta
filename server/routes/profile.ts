import express from "express";
import { allProfiles, 
        getProfileById, 
        addProfile, 
        updateProfile }
 from "../controllers/profile";
 import { validateProfile, validateProfileId } from "../validate"
 import protect from "../middleware/auth";

 const router = express.Router();
 
router.route("/").get(allProfiles);

router.route("/:id").get(validateProfileId, getProfileById);

router.route("/").post(validateProfile, addProfile);

router.route("/:id").put(protect, validateProfileId, updateProfile);

module.exports = router;
