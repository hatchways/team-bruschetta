const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    user_id:{
        type: Number,
        require: true,
        unique: true
    },
    sitter_id:{
        type: Number,
        require: true,
        unique: true
    },
    /*thinking about setting dates to strings and converting to Date format
    **in the middleware once request is made, but for now this is fine.*/
    start_date:{
        type: Date,
        require: true
    },
    end_date:{
        type: Date,
        require: true
    },
    //if false longer than 3 days, then is has been declined by default
    accepted: Boolean,
    paid: Boolean
})