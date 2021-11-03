const Requests = require('../models/requests');
const express = require('express')
const router = express.Router();

// @Route Get /requests
// @Desc search and return requests for specific sitter
// @Access private

router.get('/' ,async (req, res, next) => {

    const listOfRequests = await Requests.find();

    console.log(listOfRequests);

    res.status(201).json({
        success:{
            requests: listOfRequests
        }
    })
})

// @Route Post /requests/new
// @Desc Create new request
// @Access private

router.post('/new', async (req, res, next) => {
    console.log(req.body);
    const request = new Requests(req.body);
    await request.save();

    console.log(request);

    res.status(201).json({
        success:{
            request: request
        }
    })
})

// @Route Put /requests/{sitter_id}
// @Desc search and update requests with approved or declined
// @Access private

router.put('/:sitter_id', async(req, res, next) =>{
    const { sitter_id } = req.params;
    const request = await Requests.findByIdAndUpdate(sitter_id, {...req.body.request});

    console.log(request);

    res.status(201).json({
        success:{
            request: request
        }
    })
})

module.exports = router;