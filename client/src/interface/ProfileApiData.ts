import { Profile } from './Profile';

export interface ProfileApiDataSuccess {
  message: string;
  profile: Profile;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: ProfileApiDataSuccess;
}
