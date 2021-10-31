import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AuthApiData,
  AuthApiDataSuccess,
  ProfileListApiData,
  ProfileListApiDataSuccess,
} from '../interface/AuthApiData';
import { User } from '../interface/User';
import { SitterProfile } from '../interface/Profile';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';
import profileListAPI from '../helpers/APICalls/profileListing';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  profileList: SitterProfile | null | undefined;
  updateProfileContext: (data: ProfileListApiDataSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  profileList: undefined,
  updateProfileContext: () => null,
  logout: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [profileList, setProfileList] = useState<SitterProfile | null | undefined>();

  const history = useHistory();

  const updateLoginContext = useCallback(
    (data: AuthApiDataSuccess) => {
      setLoggedInUser(data.user);
      history.push('/dashboard');
    },
    [history],
  );

  const updateProfileContext = useCallback(
    (data: ProfileListApiDataSuccess) => {
      setProfileList(data.profiles);
      history.push('/profile-list');
    },
    [history],
  );

  useEffect(() => {
    const allProfileList = async ({
      firstName,
      lastName,
      address,
      description,
      availability,
      role,
      price,
    }: {
      firstName: string;
      lastName: string;
      address: string;
      description: string;
      availability: string;
      role: 'sitter';
      price: number;
    }) => {
      await profileListAPI(firstName, lastName, address, description, availability, role, price).then(
        (data: ProfileListApiData) => {
          if (data.success) {
            updateProfileContext(data.success);
            history.push('/profile-list');
          } else {
            setProfileList(undefined);
          }
        },
      );
    };
  }, [updateProfileContext, history]);

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
          history.push('/dashboard');
        } else {
          setLoggedInUser(null);
          history.push('/login');
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout, profileList, updateProfileContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
