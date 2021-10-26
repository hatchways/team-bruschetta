import { useState, useContext, useEffect, useCallback, createContext, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileApiData, ProfileApiDataSuccess } from '../interface/ProfileApiData';
import { Profile } from '../interface/Profile';
import editProfile from '../helpers/APICalls/editProfile';
import profileListing from '../helpers/APICalls/profileListing';

interface IProfileContext {
  profileEdit: Profile | undefined;
  getProfile: Profile | undefined;
  updateProfileContext: (data: ProfileApiDataSuccess) => void;
  getProfileContext: (data: ProfileApiDataSuccess) => void;
}

export const ProfileContext = createContext<IProfileContext>({
  getProfile: undefined,
  profileEdit: undefined,
  updateProfileContext: () => null,
  getProfileContext: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [profileEdit, setProfileEdit] = useState<Profile | undefined>();
  const [getProfile, setGetProfile] = useState<Profile | undefined>();

  const history = useHistory();

  const updateProfileContext = useCallback(
    (data: ProfileApiDataSuccess) => {
      setProfileEdit(data.profile);
      history.push('/dashboard');
    },
    [history],
  );

  const getProfileContext = useCallback(
    (data: ProfileApiDataSuccess) => {
      setGetProfile(data.profile);
      history.push('/profile-listing');
    },
    [history],
  );

  useEffect(() => {
    const checkEditProfile = async () => {
      await editProfile().then((data: ProfileApiData) => {
        if (data.success) {
          updateProfileContext(data.success);
          history.push('/dashboard');
        } else {
          setProfileEdit(undefined);
          history.push('/dashboard');
        }
      });
    };
    checkEditProfile();
  }, [updateProfileContext, history]);

  useEffect(() => {
    const checkGetProfile = async () => {
      await profileListing().then((data: ProfileApiData) => {
        if (data.success) {
          getProfileContext(data.success);
          history.push('/profile-listing');
        } else {
          setGetProfile(undefined);
          history.push('/dashboard');
        }
      });
    };
    checkGetProfile();
  }, [getProfileContext, history]);

  return (
    <ProfileContext.Provider value={{ profileEdit, updateProfileContext, getProfile, getProfileContext }}>
      {children}
    </ProfileContext.Provider>
  );
};

export function useProfile(): IProfileContext {
  return useContext(ProfileContext);
}
