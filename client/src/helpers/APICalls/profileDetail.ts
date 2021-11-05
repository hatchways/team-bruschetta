import { ProfileDetailApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const profileDetailData = {
  async details(): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    return await fetch(`/profiles/:id`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  },

  async image(): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    return await fetch(`/upload/profile-pic/:id`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  },
};
export default profileDetailData;
