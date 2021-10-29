export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phone: number;
  address: string;
  description: string;
}

export interface ProfileLists {
  firstName: string;
  lastName: string;
  address: string;
  description: string;
  availability: string;
  role: 'sitter';
  price: number;
}
