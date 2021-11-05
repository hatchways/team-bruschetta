import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Box, Typography, Container, InputLabel, TextField } from '@material-ui/core';

import useStyles from './useStyles';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

export default function Homepage(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <AuthHeader />
      <Box className={classes.root}>
        <Grid item xs={12} sm={7} component={Paper} square className={classes.profile}>
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
        </Grid>
        <Grid item xs={12} sm={6} component={Paper} square className={classes.homeBgImage}></Grid>
      </Box>
    </Container>
  );
}
