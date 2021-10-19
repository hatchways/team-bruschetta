const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  firstName: {
   type: String,
   required: true,
   minlength : 2,
   trim : true,
  },
  lastName: {
   type: String,
   required: true,
   minlength : 2,
   trim : true,
  },
  gender: {
   type: String,
   required: true,
  },
  dob: [{
    day: {
      type: Number,
      required: true, 
    },
    month: {  
      type: String,
      required: true, 
    },
    year: {  
      type: Number,
      required: true, 
    },
  }],
  email: {
   type: String,
   required: true,
   trim : true,
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
  availability: {
   type: String,
  },
  user: {type: Schema.Types.ObjectId, ref: "user"},
});

async function findOneOrCreate(profileId){
  const record = await this.findOne({ profileId });
  if (record) {
    return record;
  } else {
    return this.create({ profileId });
  }
};

ProfileSchema.statics.findOneOrCreate = findOneOrCreate;

module.exports = mongoose.model('Profile',ProfileSchema);
