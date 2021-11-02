const mongoose = require("mongoose")
const Requests = require('../models/requests');
const asyncHandler = require("express-async-handler");

exports.allRequests = asyncHandler(async (req, res, next) => {
  const requests = await Request.find((err, requests) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(requests);
    }
  });
});

exports.getRequestById = asyncHandler(async (req, res, next) => {
  const userId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send("Bad Request");
  } 
  const request = await Requests.findById(userId, (err, request) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(request);
    }
  });
});

exports.addRequest = asyncHandler(async (req, res, next) => {
  const { startDate, endDate, rating } = req.body
  if (!startDate || !endDate || !rating) {
    return res.status(400).send("missing required fields");
  }
  const newRequest = new Requests({ startDate, endDate, rating});
    await newRequest.save((err, request) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(request);
    }
  });
});

exports.updateRequest = asyncHandler(async (req, res, next) => {
  const { accepted, declined} = req.body
  const sitterId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(sitterId)) {
    return res.status(400).send("Bad Request");
  }
  if (!accepted || !declined) {
    return res.status(400).send("missing required fields");
  }
  const request = await Requests.findByIdAndUpdate(
    sitterId,
    { accepted, declined },
    {new: true},
    (err, request) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(request);
      }
    }
  );
});
