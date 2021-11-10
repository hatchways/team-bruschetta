import { MuiThemeProvider } from '@material-ui/core/';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/Profile/EditProfile';
import DemoUser from './pages/DemoUser/DemoUser';
import SearchProfile from './pages/Profile/ProfileList/SearchProfile';
import ProfileDetail from './pages/Profile/ProfileDetailPage/ProfileDetail';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import Bookings from './pages/Bookings/Bookings';
import Homepage from './pages/Homepage/Homepage';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <Route exact path="/" component={Homepage} />
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/demo-login" component={DemoUser} />
                <Route exact path="/edit-profile" component={EditProfile} />
                <Route exact path="/profile-list" component={SearchProfile} />
                <Route exact path="/profile-detail" component={ProfileDetail} />
                <Route exact path="/manage-bookings" component={Bookings} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/settings" component={ProfileSettings} />
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
