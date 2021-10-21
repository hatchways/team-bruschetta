export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phone: number;
  address: string;
  description: string;
}

export interface SearchProfileApiData {
  profiles?: Profile[];
  error?: { message: string };
}
