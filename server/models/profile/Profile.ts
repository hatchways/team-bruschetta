import { Document, Schema, model, Model } from 'mongoose';
import { ProfileInterface } from '../profile/profileInterface';

export interface IProfileModel extends ProfileInterface, Document {
  fullName(): string;
}

export const ProfileSchema: Schema = new Schema({
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
  },
  createdAt: {
   type: Date,
  },
  lastUpdated: {
   type: Date,
   default: new Date(),
  }
});

ProfileSchema.pre("save", function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
ProfileSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

export const Profile: Model<IProfileModel> = model<IProfileModel>("Profile", ProfileSchema);