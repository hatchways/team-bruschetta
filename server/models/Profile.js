const { Schema, model } = require('mongoose');

const profileSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
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
  role: {
    type: String,
    required: true,
  },
  availability: {
    monday: {
     type: Boolean,
     required: true,
     default: false,
  },
   tuesday: {
     type: Boolean,
     required: true,
     default: false,
  },
    wednesday: {
     type: Boolean,
     required: true,
     default: false,
  },
   thursday: {
     type: Boolean,
     required: true,
     default: false,
  },
    friday: {
     type: Boolean,
     required: true,
     default: false,
  },
   saturday: {
     type: Boolean,
     required: true,
     default: false,
  },
    sunday: {
     type: Boolean,
     required: true,
     default: false,
  }
  },
});

module.exports = mongoose.model('Profile', profileSchema);
