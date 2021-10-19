import React from 'react';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import useStyles from './useStyles';
import { Box } from '@material-ui/core';

const ProfileSettings = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PhotoUpload />
    </Box>
  );
};

export default ProfileSettings;
