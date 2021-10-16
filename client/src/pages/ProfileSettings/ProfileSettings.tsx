import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideDraw from '../../components/SideDrawer/SideDraw';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import useStyles from './useStyles';

const ProfileSettings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <SideDraw />
      <PhotoUpload />
    </div>
  );
};

export default ProfileSettings;
