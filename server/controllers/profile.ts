import { Request, Response } from "express";
import { Profile } from "../models/profile/Profile"

export const allProfiles = (req: Request, res: Response) => {
  const profiles = Profile.find((err: any, profiles: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(profiles);
    }
  });
};

export const getProfileById = (req: Request, res: Response) => {
  const profile = Profile.findById(req.params.profileId, (err: any, profile: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(profile);
    }
  });
};

export const addProfile = (req: Request, res: Response) => {
  const profile = new Profile(req.body);
  profile.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(profile);
    }
  });
};

export const updateProfile = (req: Request, res: Response) => {
  let profile = Profile.findByIdAndUpdate(
    req.params.profileId,
    req.body,
    (err: any, profile: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(profile);
      }
    }
  );
};
