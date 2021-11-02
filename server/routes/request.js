const express = require("express");
const router = express.Router();
const { allRequests, 
        getRequestById, 
        addRequest, 
        updateRequest }
 = require("../controllers/requests");
 const protect =  require("../middleware/auth");

router.route("/").get(protect, allRequests);

router.route("/:userId").get(protect, getRequestById);

router.route("/").post(protect, addRequest);

router.route("/:sitterId").patch(protect, updateRequest);

module.exports = router;