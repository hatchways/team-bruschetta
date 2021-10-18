import { Document, Schema, model, Model } from 'mongoose';
import { ProfileInterface } from '../profile/profileInterface';

export interface IProfileModel extends ProfileInterface, Document {};

export const ProfileSchema: Schema = new Schema({
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
   required: true,
  },
  user: {type: Schema.Types.ObjectId, ref: "user"},
});

async function findOneOrCreate(
  profileId: string
): Promise<IProfileModel> {
  const record = await this.findOne({ profileId });
  if (record) {
    return record;
  } else {
    return this.create({ profileId });
  }
};

ProfileSchema.statics.findOneOrCreate = findOneOrCreate;

export const Profile: Model<IProfileModel> = model<IProfileModel>("Profile", ProfileSchema);
