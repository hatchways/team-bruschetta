import { Document, Schema, model, Model } from 'mongoose';
import { ProfileInterface } from '../profile/profileInterface';

export interface IProfileModel extends ProfileInterface, Document {};

export const ProfileSchema: Schema = new Schema({
  firstName: {
   type: String,
   required: true,
  },
  lastName: {
   type: String,
   required: true,
  },
  gender: {
   type: String,
   required: true,
  },
  dob: {
   required: true,
  },
  email: {
   type: String,
   required: true,
  },
  phone: {
   type: Number,
   required: true,
  },
  address: {
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
