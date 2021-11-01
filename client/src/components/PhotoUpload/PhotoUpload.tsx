import React, { useEffect, useRef, useState } from 'react';
import useStyles from './useStyles';
import { Card, Typography, Avatar, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import avatarImage from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';
import uploadImage from '../../helpers/APICalls/uploadImage';
import { useAuth } from '../../context/useAuthContext';

const PhotoUpload = (): JSX.Element => {
  const [imageString, setImageString] = useState<string>('');
  const { loggedInUser } = useAuth();

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const classes = useStyles();
  const infoString = {
    photoInfo: 'Be sure to use a photo that clearly shows your face',
    uploadInfo: 'Upload a file from your device',
  };

  const selectImage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    inputFileRef.current.click();
    inputFileRef.current.addEventListener('change', (e) => {
      readAndSetImageString(e);
    });
  };

  const readAndSetImageString = (e: Event) => {
    e.preventDefault();
    const reader = new FileReader();
    const file: File = inputFileRef.current.files[0];

    if (file) reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imgRead: string | ArrayBuffer = reader.result;
      if (typeof imgRead === 'string' && imgRead !== '') {
        setImageString(imgRead);
      }
    };
  };

  useEffect(() => {
    if (imageString && loggedInUser.email)
      (async () => {
        await handleUpload(imageString, loggedInUser.email);
      })();
  }, [imageString, loggedInUser]);

  const handleUpload = async (imgStr: string, email: string) => await uploadImage(imgStr, email);

  return (
    <Card className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        Profile Photo
      </Typography>
      <Avatar role="upload-avatar" className={classes.avatar} src={avatarImage} alt="profile picture" />
      <Typography className={classes.info}>{infoString.photoInfo}</Typography>
      <form>
        <input
          ref={inputFileRef}
          id="profilepic-upload"
          type="file"
          className={classes.inputFile}
          color="secondary"
        ></input>
        <Button onClick={selectImage} className={classes.uploadButton}>
          {infoString.uploadInfo}
        </Button>
      </form>
      <Button className={classes.deleteIcon}>
        <DeleteIcon />
        Delete photo
      </Button>
    </Card>
  );
};

export default PhotoUpload;
