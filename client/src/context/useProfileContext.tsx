import { useState, useContext, useEffect, useCallback, createContext, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileApiData, ProfileApiDataSuccess } from '../interface/ProfileApiData';
import { Profile } from '../interface/Profile';
import editProfile from '../helpers/APICalls/editProfile';

interface IProfileContext {
  profileEdit: Profile | undefined;
  updateProfileContext: (data: ProfileApiDataSuccess) => void;
}

export const ProfileContext = createContext<IProfileContext>({
  profileEdit: undefined,
  updateProfileContext: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [profileEdit, setProfileEdit] = useState<Profile | undefined>();

  const history = useHistory();

  const updateProfileContext = useCallback(
    (data: ProfileApiDataSuccess) => {
      setProfileEdit(data.profile);
      history.push('/dashboard');
    },
    [history],
  );

  return <ProfileContext.Provider value={{ profileEdit, updateProfileContext }}>{children}</ProfileContext.Provider>;
};

export function useProfile(): IProfileContext {
  return useContext(ProfileContext);
}
