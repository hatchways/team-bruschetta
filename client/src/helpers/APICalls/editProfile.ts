import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/ProfileApiData';

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
): Promise<ProfileApiData> => {
  const body = {
    data: { firstName, lastName, gender, dateOfBirth, phone, address, description },
    user: { _id, email },
  };
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'include',
  };
  return await fetch(`/profiles/${_id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
