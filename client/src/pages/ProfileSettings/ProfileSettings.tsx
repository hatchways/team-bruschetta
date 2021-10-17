import React from 'react';
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
    return <CircularProgress />;
  }

  return (
    <div className={classes.root}>
      <PhotoUpload />
    </div>
  );
};

export default ProfileSettings;
