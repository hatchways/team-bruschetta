const mongoose = require('mongoose')
const User = require('./User');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sitterId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    start:{
        type: String,
        required: true,
        default: Date.now()
    },
    end:{
        type: Date,
        required: true
    },
    accepted: Boolean,
    paid: Boolean
})

module.exports = mongoose.model('Requests', RequestSchema);