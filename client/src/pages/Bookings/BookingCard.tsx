import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid, Box, Typography, Avatar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import avatar from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';

import useStyles from './useStyles';

export default function BookingCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid className={classes.bookingCard} component={Paper} spacing={3} square>
      <Box className={classes.cardHead}>
        <Typography>5 April 2020, 10-12AM</Typography>
        <SettingsIcon className={classes.settingsIcon} />
      </Box>
      <Box className={classes.nameBox2}>
        <Avatar alt="image" src={avatar}></Avatar>
        <Typography className={classes.name}>Seye Onigbinde</Typography>
      </Box>
    </Grid>
  );
}
