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