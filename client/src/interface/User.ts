export interface User {
  email: string;
  username: string;
}

export interface DemoUser {
  email: 'bruschetta@gmail.com';
  username: 'bruschetta';
  password: 'password';
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
