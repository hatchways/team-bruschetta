import { Grid, Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { NavLink, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';
import { useEffect } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import EditProfile from '../Profile/EditProfileForm/EditProfileForm';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

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
        <Grid xs={12} sm={3} item className={classes.sidebar}>
          <NavLink
            activeStyle={{ borderBottom: '4px solid #81b214', color: 'red', textDecoration: 'none' }}
            to="/dashboard/edit-profile"
            className={classes.navlink}
          >
            <Typography className={classes.links}>Edit Profile</Typography>
          </NavLink>
          <NavLink to="/dashboard/settings" className={classes.navlink}>
            <Typography className={classes.links}>Profile Photo</Typography>
          </NavLink>
          <NavLink to="/dashboard/#" className={classes.navlink}>
            <Typography className={classes.links}>Availability</Typography>
          </NavLink>
          <NavLink to="/dashboard/#" className={classes.navlink}>
            <Typography className={classes.links}>Payment</Typography>
          </NavLink>
          <NavLink to="/dashboard/#" className={classes.navlink}>
            <Typography className={classes.links}>Security</Typography>
          </NavLink>
          <NavLink to="/dashboard/#" className={classes.navlink}>
            <Typography className={classes.links}>Settings</Typography>
          </NavLink>
        </Grid>
        <Grid xs={12} sm={9} component={Paper} spacing={3} square item className={classes.drawerWrapper}>
          {/* <ChatSideBanner loggedInUser={loggedInUser} /> */}
          <Switch>
            <Route path="/dashboard/edit-profile">
              <EditProfile loggedInUser={loggedInUser} handleSubmit={handleSubmit} />
            </Route>
            <Route path="/dashboard/settings">
              <ProfileSettings loggedInUser={loggedInUser} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
