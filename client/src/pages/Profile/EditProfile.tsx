import * as React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Button,
  CssBaseline,
  TextField,
  TextareaAutosize,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Container,
} from '@material-ui/core';
// import { DatePicker } from '@material-ui/pickers/DatePicker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';

const theme = createMuiTheme();

export default function EditProfile() {
  const [phoneNumber, setPhoneNumber] = React.useState(false);

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

  const handleToggle = () => {
    setPhoneNumber(!phoneNumber);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
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
                <InputLabel id="gender">Male</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  // value={age}
                  label="gender"
                  // onChange={handleChange}
                  variant="outlined"
                  className={classes.select}
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
                <InputLabel id="month">June</InputLabel>
                <Select
                  labelId="month"
                  id="month"
                  // value={age}
                  label="month"
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
                {/* <DatePicker views={['year']} label="Year only" /> */}
              </FormControl>

              {/* <FormHelperText>Required</FormHelperText> */}
            </Grid>
            <Grid item xs={9} sm={1}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="day">15</InputLabel>
                <Select
                  labelId="day"
                  id="day"
                  // value={age}
                  label="day"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9} sm={4}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="year">1988</InputLabel>
                <Select
                  labelId="year"
                  id="year"
                  // value={age}
                  label="year"
                  // onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value={1980}>1980</MenuItem>
                  <MenuItem value={1981}>1981</MenuItem>
                  <MenuItem value={1982}>1982</MenuItem>
                  <MenuItem value={1983}>1983</MenuItem>
                  <MenuItem value={1984}>1984</MenuItem>
                  <MenuItem value={1985}>1985</MenuItem>
                  <MenuItem value={1986}>1986</MenuItem>
                  <MenuItem value={1987}>1987</MenuItem>
                  <MenuItem value={1988}>1988</MenuItem>
                  <MenuItem value={1989}>1989</MenuItem>
                  <MenuItem value={1990}>1990</MenuItem>
                  <MenuItem value={1991}>1991</MenuItem>
                  <MenuItem value={1992}>1992</MenuItem>
                  <MenuItem value={1993}>1993</MenuItem>
                  <MenuItem value={1994}>1994</MenuItem>
                  <MenuItem value={1995}>1995</MenuItem>
                  <MenuItem value={1996}>1996</MenuItem>
                  <MenuItem value={1997}>1997</MenuItem>
                  <MenuItem value={1998}>1998</MenuItem>
                  <MenuItem value={1999}>1999</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={2001}>2001</MenuItem>
                  <MenuItem value={2002}>2002</MenuItem>
                  <MenuItem value={2003}>2003</MenuItem>
                  <MenuItem value={2004}>2004</MenuItem>
                  <MenuItem value={2005}>2005</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.field}>
              <div className={classes.label}>Email Address</div>
              <TextField
                fullWidth
                id="email"
                label="john-doe@gmail.com"
                name="email"
                autoComplete="email"
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid container spacing={3} className={classes.field}>
              <div className={classes.dob}>Phone Number</div>
              <Grid item xs={8} sm={4}>
                <em>No Phone number entered</em>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  className={classes.phoneButton}
                  onClick={handleToggle}
                >
                  {phoneNumber ? 'Save Phone Number' : 'Add a Phone Number'}
                  {/* Add a Phone Number */}
                </Button>
              </Grid>
            </Grid>
            {phoneNumber && (
              <Grid item xs={12} className={classes.field}>
                <div className={classes.label}>Phone Number</div>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="text"
                  id="phone"
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
            )}
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
