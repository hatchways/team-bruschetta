import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileListApiData } from '../../interface/AuthApiData';

const profileListing = async (
  firstName: string,
  lastName: string,
  address: string,
  description: string,
  availability: string,
  role: 'sitter',
  price: number,
): Promise<ProfileListApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, address, description, availability, role, price }),
    credentials: 'include',
  };
  return await fetch(`/profiles/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to fetch profiles. Please try again' },
    }));
};

export default profileListing;
