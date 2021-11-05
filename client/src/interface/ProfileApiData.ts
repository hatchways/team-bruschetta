import { Profile, ProfileLists } from './Profile';

export interface ProfileApiDataSuccess {
  message: string;
  profile: Profile;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: ProfileApiDataSuccess;
}

export interface ProfileListApiDataSuccess {
  message: string;
  profileList: ProfileLists;
}

export interface ProfileListApiData {
  error?: { message: string };
  success?: ProfileListApiDataSuccess;
}
