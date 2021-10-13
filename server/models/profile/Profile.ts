import {Document, Schema, model, Model } from 'mongoose';
import {ProfileInterface} from '../profile/profileInterface'

const ProfileSchema = new Schema<ProfileInterface>({
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
  }
});

