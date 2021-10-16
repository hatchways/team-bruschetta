import React from 'react';
import useStyles from './useStyles';
import { Card, Typography, Avatar, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const PhotoUpload = (): JSX.Element => {
  const classes = useStyles();
  const infoString = 'Be sure to use a photo that clearly shows your face';
  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>Profile Photo</Typography>
      <Avatar />
      <Typography className={classes.info}>{infoString}</Typography>
      <Button className={classes.uploadButton} variant="outlined" color="secondary">
        Upload a file from your device
      </Button>
      <Button>
        <DeleteIcon />
        Delete photo
      </Button>
    </Card>
  );
};

export default PhotoUpload;
