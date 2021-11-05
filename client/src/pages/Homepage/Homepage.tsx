import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Container, InputLabel, TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

export default function Homepage(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <Box className={classes.navbar}>
        <AuthHeader />
      </Box>
      <Box className={classes.root}>
        <Box className={classes.profile}>
          <Typography className={classes.title}>Find the care your dog deserves</Typography>
          <InputLabel className={classes.inputLabel}>Where</InputLabel>
          <TextField
            id="search"
            name="location"
            type="text"
            label="Anywhere"
            autoComplete="location"
            className={classes.location}
            variant="outlined"
          />
          <InputLabel className={classes.inputLabel}>Drop In/Drop Off</InputLabel>
          <Grid item xs={4} sm={7} className={classes.availability}>
            <TextField
              id="search"
              name="availability"
              type="date"
              autoComplete="availability"
              className={classes.textField}
              variant="outlined"
            />
            <TextField
              id="search"
              name="availability"
              type="date"
              autoComplete="availability"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Button
            component={Link}
            to="/manage-bookings"
            color="secondary"
            className={classes.accBtn}
            variant="contained"
          >
            Find My Dog Sitter
          </Button>
        </Box>
        <Box className={classes.homeBgImage}></Box>
      </Box>
    </Container>
  );
}
