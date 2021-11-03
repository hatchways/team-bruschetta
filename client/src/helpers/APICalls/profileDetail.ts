import { ProfileDetailApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const profileDetailData = {
  async details(_id: string): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    return await fetch(`/profiles/${_id}`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  },

  async image(_id: string): Promise<ProfileDetailApiData> {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      credentials: 'include',
    };
    return await fetch(`/upload/profile-pic/${_id}`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  },
};
export default profileDetailData;
