const mongoose = require("mongoose");

interface ProfileInterface {
  firstName: string;
  lastName: string;
  description: string;
  availability: string;
}

const profileSchema: ProfileInterface = new mongoose.Schema({
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  description: {
    required: true
  },
  availability: {
    required: true
  }
});

