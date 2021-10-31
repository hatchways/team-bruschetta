import { User } from './User';
import { SitterProfile } from './Profile';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}

export interface ProfileListApiDataSuccess {
  profiles: SitterProfile;
}

export interface ProfileListApiData {
  error?: { message: string };
  success?: ProfileListApiDataSuccess;
}
