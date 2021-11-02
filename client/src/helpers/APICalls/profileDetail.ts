import { ProfileDetailApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

export class ProfileDetailData {
  async details(
    firstName: string,
    lastName: string,
    address: string,
    description: string,
    price: number,
  ): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, address, description, price }),
      credentials: 'include',
    };
    return await fetch(`/profiles/:id`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  }

  async image(imgUrl: string): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imgUrl }),
      credentials: 'include',
    };
    return await fetch(`/upload/profile-pic/:id`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  }
}
