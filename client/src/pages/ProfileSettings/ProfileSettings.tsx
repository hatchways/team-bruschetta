import React from 'react';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import useStyles from './useStyles';

const ProfileSettings = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PhotoUpload />
    </div>
  );
};

export default ProfileSettings;
