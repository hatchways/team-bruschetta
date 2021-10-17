import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideDraw from '../../components/SideDrawer/SideDraw';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import useStyles from './useStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

const ProfileSettings = (): JSX.Element => {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <div className={classes.root}>
      {/* <NavBar /> */}
      {/* <SideDraw /> */}
      <PhotoUpload />
    </div>
  );
};

export default ProfileSettings;
