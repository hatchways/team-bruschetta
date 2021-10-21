import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const editProfile = async (
  _id: string,
  firstName: string,
  lastName: string,
  gender: string,
  dateOfBirth: Date,
  email: string,
  phone: number,
  address: string,
  description: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id, firstName, lastName, gender, dateOfBirth, email, phone, address, description }),
    credentials: 'include',
  };
  return await fetch(`/profiles/${_id}`, fetchOptions)
    .then((res) => res.json())
    // .then((firstName, lastName, gender, dateOfBirth, email, phone, address, description) => {
    //   editProfile;
    // })
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
