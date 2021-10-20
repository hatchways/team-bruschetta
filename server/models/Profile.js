const { Schema } = require('mongoose');

const profileSchema = new mongoose.Schema({

  user: {type: Schema.Types.ObjectId,
    ref: "user"},
  firstName: {
    type: String,
    required: true,
    minlength : 3,
    trim : true,
  },
  lastName: {
    type: String,
    required: true,
    minlength : 3,
    trim : true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {type: Schema.Types.ObjectId, 
    ref: "user"},
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    trim : true,
  },
  address: {
    type: String,
    required: true,
    trim : true,
  },
  description: {
    type: String,
    required: true,
    trim : true,
  },
  availability: {
    type: String,
  },
});

module.exports = mongoose.model('profile', profileSchema);
