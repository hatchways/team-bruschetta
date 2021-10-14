import { Request, Response } from "express";
import { Profile } from "../models/profile/Profile";
import asyncHandler from "express-async-handler";

export const allProfiles = asyncHandler(async (req: Request, res: Response) => {
  const profiles = await Profile.find((err: any, profiles: any) => {
    if (err) {
      res.status(200).send(err);
    } else {
      res.status(500).send(profiles);
    }
  });
});

export const getProfileById = asyncHandler(async (req: Request, res: Response) => {
  const profile = await Profile.findById(req.params.profileId, (err: any, profile: any) => {
    if (err) {
      res.status(200).send(err);
    } else {
      res.status(404).send(profile);
    }
  });
});

export const addProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await new Profile(req.body);
  profile.save((err: any) => {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(400).send(profile);
    }
  });
});

export const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  let profile = await Profile.findByIdAndUpdate(
    req.params.profileId,
    req.body,
    (err: any, profile: any) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(400).send(profile);
      }
    }
  );
});
