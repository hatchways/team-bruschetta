export interface User {
  email: string;
  username: string;
  password: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
