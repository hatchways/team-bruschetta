import * as React from 'react';
import 'date-fns';
import Paper from '@material-ui/core/Paper';
import { Grid, Box, Typography, Container, Avatar } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import avatar from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import BookingCard from './BookingCard';

import useStyles from './useStyles';

export default function Bookings(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Grid className={classes.nextBooking} elevation={6} component={Paper} spacing={3} square>
          <Box className={classes.cardHead}>
            <Typography className={classes.headers}>Your Next Booking:</Typography>
            <SettingsIcon className={classes.settingsIcon} />
          </Box>
          <Typography className={classes.date}>5 April 2020, 10-12AM</Typography>
          <Box className={classes.nameBox}>
            <Avatar alt="image" src={avatar}></Avatar>
            <Typography className={classes.name}>Seye Onigbinde</Typography>
          </Box>
        </Grid>
        <Grid elevation={6} component={Paper} spacing={3} square className={classes.profile}>
          <Box className={classes.cardHead}>
            <Typography className={classes.headers}>Your Current Booking:</Typography>
          </Box>
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <Box className={classes.cardHead}>
            <Typography className={classes.headers}>Past Booking:</Typography>
          </Box>
          <BookingCard />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} elevation={6} component={Paper} spacing={3}></Grid>
    </Container>
  );
}
