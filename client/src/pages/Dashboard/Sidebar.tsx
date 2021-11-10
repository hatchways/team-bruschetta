import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import useStyles from './useStyles';

export default function Sidebar(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid xs={12} sm={2} item className={classes.sidebar}>
      <NavLink to="/dashboard/edit-profile" className={classes.navlink}>
        <Typography className={classes.links}>Edit Profile</Typography>
      </NavLink>
      <NavLink to="/dashboard/settings" className={classes.navlink}>
        <Typography className={classes.links}>Profile Photo</Typography>
      </NavLink>
      <NavLink to="/dashboard/#" className={classes.navlink}>
        <Typography className={classes.links}>Availability</Typography>
      </NavLink>
      <NavLink to="/dashboard/#" className={classes.navlink}>
        <Typography className={classes.links}>Payment</Typography>
      </NavLink>
      <NavLink to="/dashboard/#" className={classes.navlink}>
        <Typography className={classes.links}>Security</Typography>
      </NavLink>
      <NavLink to="/dashboard/#" className={classes.navlink}>
        <Typography className={classes.links}>Settings</Typography>
      </NavLink>
      <NavLink to="/dashboard/profile-list" className={classes.navlink}>
        <Typography className={classes.links2}>Profile Listings</Typography>
      </NavLink>
    </Grid>
  );
}
