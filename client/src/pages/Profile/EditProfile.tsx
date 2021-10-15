import * as React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import { Button, TextField, TextareaAutosize, Grid, Box, Typography, Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';

const theme = createMuiTheme();

export default function EditProfile() {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        {/* <CssBaseline /> */}
        <Box className={classes.title}>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className={classes.form}>
            <Grid item xs={12} className={classes.field}>
              <div className={classes.label}>First Name</div>
              <TextField
                fullWidth
                id="firstName"
                label="John"
                name="firstName"
                autoComplete="firstName"
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.field}>
              <div className={classes.label}>Last Name</div>
              <TextField
                fullWidth
                id="lastName"
                label="Doe"
                name="lastName"
                autoComplete="lastName"
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} className={classes.field}>
                {/* <Select>
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                </Select> */}
                <div className={classes.gender}>Gender</div>
                <TextField
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.field}>
              <div className={classes.dob}>Date of Birth</div>
              <Grid item xs={9} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="month"
                  fullWidth
                  id="month"
                  label="Month"
                  autoFocus
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={9} sm={1}>
                <TextField
                  fullWidth
                  id="day"
                  label="Day"
                  name="day"
                  autoComplete="family-name"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={9} sm={4}>
                <TextField
                  fullWidth
                  id="year"
                  label="Year"
                  name="year"
                  autoComplete="1988"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.field}>
                <div className={classes.label}>Email Address</div>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid container spacing={3} className={classes.field}>
                <div className={classes.dob}>Phone Number</div>
                <Grid item xs={8} sm={4}>
                  No Phone number entered
                </Grid>
                <Grid item xs={8} sm={4}>
                  <Button type="submit" fullWidth variant="outlined" color="secondary" className={classes.phoneButton}>
                    Add a Phone Number
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.field}>
                <div className={classes.label}>Where You Live</div>
                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.field}>
                <div className={classes.label}>Description</div>
                <TextField
                  fullWidth
                  name="description"
                  label="About you"
                  type="text"
                  id="description"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.field}>
                <div className={classes.label}>Description</div>
                <TextareaAutosize
                  name="description"
                  id="description"
                  rowsMin={5}
                  placeholder="About you"
                  defaultValue=""
                  style={{ width: '100%', borderColor: '#ccc' }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
