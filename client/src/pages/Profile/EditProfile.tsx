import * as React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Button,
  TextField,
  TextareaAutosize,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Container,
} from '@material-ui/core';
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
        <Box component="form" onSubmit={handleSubmit} className={classes.form}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Edit Profile
          </Typography>
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
              <div className={classes.gender}>Gender</div>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  // value={age}
                  label="Gender"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.field}>
            <div className={classes.dob}>Date of Birth</div>
            <Grid item xs={9} sm={4}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="month">Month</InputLabel>
                <Select
                  labelId="month"
                  id="month"
                  // value={age}
                  label="Month"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1}>January</MenuItem>
                  <MenuItem value={2}>February</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>April</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>June</MenuItem>
                  <MenuItem value={7}>July</MenuItem>
                  <MenuItem value={8}>August</MenuItem>
                  <MenuItem value={9}>September</MenuItem>
                  <MenuItem value={10}>October</MenuItem>
                  <MenuItem value={11}>November</MenuItem>
                  <MenuItem value={12}>December</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9} sm={1}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="day">Day</InputLabel>
                <Select
                  labelId="day"
                  id="day"
                  // value={age}
                  label="Day"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9} sm={4}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="year">Year</InputLabel>
                <Select
                  labelId="year"
                  id="year"
                  // value={age}
                  label="Year"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1}>1980</MenuItem>
                  <MenuItem value={2}>1981</MenuItem>
                </Select>
              </FormControl>
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
                className={classes.textArea}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
            Save
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
