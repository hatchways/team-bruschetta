const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    sitterId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    startDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    endDate:{
        type: Date,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false,
    },
    declined: {
        type: Boolean,
        required: true,
        default: false,
    },
    paid: {
        type: Boolean,
        required: true,
        default: false,
    },
})

module.exports = mongoose.model('Requests', RequestSchema);