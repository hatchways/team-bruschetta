import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Box, Typography, Container, Avatar, Toolbar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import avatar from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import BookingCard from './BookingCard';
import BookingCalendar from './BookingCalendar';

import useStyles from './useStyles';

const initialValues = {
  firstName: 'Seye',
  lastName: 'Onigbinde',
  startDate: '5 April 2020, 10-12AM',
};

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
          <Typography className={classes.date}>{initialValues.startDate}</Typography>
          <Box className={classes.nameBox}>
            <Avatar alt="image" src={avatar}></Avatar>
            <Typography className={classes.name}>
              {initialValues.firstName} {initialValues.lastName}
            </Typography>
          </Box>
        </Grid>
        <Grid elevation={6} component={Paper} spacing={3} square className={classes.bookings}>
          <Box className={classes.cardHead}>
            <Typography className={classes.headers}>Current Bookings:</Typography>
          </Box>
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <Box className={classes.cardHead}>
            <Typography className={classes.headers}>Past Bookings:</Typography>
          </Box>
          <BookingCard />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} elevation={6} component={Paper} spacing={3} className={classes.calendar}>
        <BookingCalendar />
      </Grid>
    </Container>
  );
}
