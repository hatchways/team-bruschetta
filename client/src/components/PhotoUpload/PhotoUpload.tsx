import React from 'react';
import useStyles from './useStyles';
import { Card, Typography, Avatar, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import avatarImage from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';

const PhotoUpload = (): JSX.Element => {
  const classes = useStyles();
  const infoString = 'Be sure to use a photo that clearly shows your face';
  return (
    <Card className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        Profile Photo
      </Typography>
      <Avatar role="upload-avatar" className={classes.avatar} src={avatarImage} alt="profile picture" />
      <Typography className={classes.info}>{infoString}</Typography>
      <Button className={classes.uploadButton} variant="outlined" color="secondary">
        Upload a file from your device
      </Button>
      <Button className={classes.deleteIcon}>
        <DeleteIcon />
        Delete photo
      </Button>
    </Card>
  );
};

export default PhotoUpload;
