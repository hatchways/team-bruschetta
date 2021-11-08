import { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Switch, Route, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import DashHeader from '../../components/DashHeader/DashHeader';
import EditProfile from '../Profile/EditProfileForm/EditProfileForm';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import SearchProfile from '../Profile/ProfileList/SearchProfile';
import ProfileDetail from '../Profile/ProfileDetailPage/ProfileDetail';
import Sidebar from './Sidebar';

import useStyles from './useStyles';

interface Props {
  handleSubmit?: () => void;
}

export default function Dashboard({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Box>
      <DashHeader loggedInUser={loggedInUser} />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <Sidebar />
        <Grid xs={12} sm={9} component={Paper} spacing={3} square item className={classes.drawerWrapper}>
          <Switch>
            <Route path="/dashboard/edit-profile">
              <EditProfile loggedInUser={loggedInUser} handleSubmit={handleSubmit} />
            </Route>
            <Route path="/dashboard/settings">
              <ProfileSettings loggedInUser={loggedInUser} />
            </Route>
            <Route path="/dashboard/profile-list">
              <SearchProfile loggedInUser={loggedInUser} />
            </Route>
            <Route path="/dashboard/profile-detail">
              <ProfileDetail loggedInUser={loggedInUser} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
