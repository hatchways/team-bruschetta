import * as React from 'react';
import { Container, Typography, TextField, Grid, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
import ProfileList from './ProfileList';

export default function SearchProfile(): JSX.Element {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <Typography component="h1" variant="h3" className={classes.title}>
        Your search results
      </Typography>
      <Grid container className={classes.search}>
        <Grid item xs={8} sm={4}>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon style={{ color: 'Red' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="search"
            label="Search By Location"
            name="address"
            type="search"
            autoComplete="address"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            id="search"
            name="availability"
            type="date"
            label="Drop in"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            id="search"
            name="availability"
            type="date"
            label="Drop off"
            autoComplete="availability"
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <ProfileList />
    </Container>
  );
}
