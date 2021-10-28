import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiData, AuthApiDataSuccess } from '../interface/AuthApiData';
import { User } from '../interface/User';
import { ProfileApiDataSuccess } from '../interface/ProfileApiData';
import { Profile } from '../interface/Profile';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  profileEdit: Profile | undefined;
  updateProfileContext: (data: ProfileApiDataSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  profileEdit: undefined,
  updateProfileContext: () => null,
  logout: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [profileEdit, setProfileEdit] = useState<Profile | undefined>();
  const history = useHistory();

  const updateLoginContext = useCallback((data: AuthApiDataSuccess) => {
    setLoggedInUser(data.user);
  }, []);

  const updateProfileContext = useCallback(
    (data: ProfileApiDataSuccess) => {
      setProfileEdit(data.profile);
      history.push('/dashboard');
    },
    [history],
  );

  const logout = useCallback(async () => {
    await logoutAPI()
      .then(() => {
        history.push('/login');
        setLoggedInUser(null);
      })
      .catch((error) => console.error(error));
  }, [history]);

  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
        } else {
          setLoggedInUser(null);
          history.push('/login');
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, profileEdit, updateProfileContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
