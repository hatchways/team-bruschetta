import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/ProfileApiData';

const profileListing = async (
  firstName: string,
  lastName: string,
  address: string,
  description: string,
  availability: string,
): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, address, description, availability }),
    credentials: 'include',
  };
  return await fetch(`/profiles/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to fetch profiles. Please try again' },
    }));
};

export default profileListing;
