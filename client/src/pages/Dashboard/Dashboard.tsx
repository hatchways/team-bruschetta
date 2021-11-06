import { Grid, Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';
import { useEffect } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';

export default function Dashboard(): JSX.Element {
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
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Box>
      <DashHeader loggedInUser={loggedInUser} />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <Grid xs={12} sm={3} item className={classes.sidebar}>
          <Typography>Edit Profile</Typography>
          <Typography>Profile Photo</Typography>
          <Typography>Availability</Typography>
          <Typography>Payment</Typography>
          <Typography>Security</Typography>
          <Typography>Settings</Typography>
        </Grid>
        <Grid xs={12} sm={9} elevation={6} component={Paper} spacing={3} square item className={classes.drawerWrapper}>
          <ChatSideBanner loggedInUser={loggedInUser} />
        </Grid>
      </Grid>
    </Box>
  );
}
