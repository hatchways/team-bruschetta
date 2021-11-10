import React from 'react';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import useStyles from './useStyles';
import { Box } from '@material-ui/core';
import { User } from '../../interface/User';

interface Props {
  loggedInUser: User;
}
const ProfileSettings = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PhotoUpload loggedInUser={loggedInUser} />
    </Box>
  );
};

export default ProfileSettings;
