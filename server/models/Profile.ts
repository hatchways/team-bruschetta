const mongoose = require("mongoose");

interface ProfileInterface {
  firstName: string;
  lastName: string;
  description: string;
  availability: string;
}

const profileSchema: ProfileInterface = new mongoose.Schema({
  firstName: {
   type: String,
   required: true,
  },
  lastName: {
   type: String,
   required: true,
  },
  description: {
   type: String,
   required: true
  },
  availability: {
   type: String,
   required: true
  }
});
