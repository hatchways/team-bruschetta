import { User, DemoUser } from './User';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}

export interface DemoAuthApiDataSuccess {
  message: string;
  user: DemoUser;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}

export interface DemoAuthApiData {
  error?: { message: string };
  success?: DemoAuthApiDataSuccess;
}
