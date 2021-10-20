import * as React from 'react';
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
  Container,
  InputLabel,
} from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      phone,
      address,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: number;
      phone: number;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: number;
      phone: number;
      address: string;
      description: string;
    }>,
  ) => void;
}

const theme = createMuiTheme();

export default function EditProfile({ handleSubmit }: Props): JSX.Element {
  const [phoneNumber, setPhoneNumber] = React.useState(false);

  const classes = useStyles();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const months = Array.from({ length: 12 }, (item, index) => {
    return new Date(0, index).toLocaleString('en-US', { month: 'long' });
  }) as Array<string>;

  const curr = new Date().getUTCFullYear();
  const years = Array(curr - (curr - 70))
    .fill('')
    .map((v, idx) => curr - idx) as Array<number>;

  const days = Array.from({ length: 31 }, (item, index) => index + 1) as Array<number>;

  const handleToggle = () => {
    setPhoneNumber(!phoneNumber);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: 0,
        phone: 0,
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is required').min(3, 'First Name must be at least 3 chars long'),
        lastName: Yup.string().required('Last Name is required').min(3, 'Last Name must be at least 3 chars long'),
        gender: Yup.string().required('Please select a gender'),
        dateOfBirth: Yup.number().required('Please enter a  date of birth'),
        phone: Yup.number()
          .required('Please enter a phone number')
          .min(10, 'Phone Number must be at least 10 chars long'),
        address: Yup.string().required('Please enter an address'),
        description: Yup.string().required('Please enter a description'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="md">
            <form onSubmit={handleSubmit} className={classes.form}>
              <Typography component="h1" variant="h5" className={classes.title}>
                Edit Profile
              </Typography>
              <Grid item xs={12} className={classes.field}>
                <InputLabel className={classes.label}>First Name</InputLabel>
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
                <InputLabel className={classes.label}>Last Name</InputLabel>
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
                  <InputLabel className={classes.gender}>Gender</InputLabel>
                  <FormControl fullWidth className={classes.dropdown}>
                    <Select
                      labelId="gender"
                      id="gender"
                      label="Male"
                      name="gender"
                      variant="outlined"
                      className={classes.select}
                    >
                      <MenuItem value={'male'}>Male</MenuItem>
                      <MenuItem value={'female'}>Female</MenuItem>
                      <MenuItem value={'no answer'}>Do not Wish To Answer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.field}>
                <InputLabel className={classes.dob}>Date of Birth</InputLabel>
                <Grid item xs={10} sm={4}>
                  <FormControl fullWidth className={classes.dropdown}>
                    <Select labelId="month" id="month" name="month" label="June" variant="outlined">
                      {months.map((eachMonth) => {
                        return (
                          <MenuItem value={eachMonth} key={eachMonth}>
                            {eachMonth}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={10} sm={2}>
                  <FormControl fullWidth className={classes.dropdown}>
                    <Select labelId="day" id="day" name="day" label="15" variant="outlined">
                      {days.map((day) => {
                        return (
                          <MenuItem value={day} key={day}>
                            {day}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={10} sm={3}>
                  <FormControl fullWidth className={classes.dropdown}>
                    <Select labelId="year" id="year" name="year" label="1988" variant="outlined">
                      {years.map((year) => {
                        return (
                          <MenuItem value={year} key={year}>
                            {year}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.field}>
                  <InputLabel className={classes.label}>Email Address</InputLabel>
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
                  <InputLabel className={classes.dob}>Phone Number</InputLabel>
                  <Grid item xs={8} sm={4}>
                    <Typography>No Phone number entered</Typography>
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
                    </Button>
                  </Grid>
                </Grid>
                {phoneNumber && (
                  <Grid item xs={12} className={classes.field}>
                    <InputLabel className={classes.label}>Phone Number</InputLabel>
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
                  <InputLabel className={classes.label}>Where You Live</InputLabel>
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
                  <InputLabel className={classes.label}>Description</InputLabel>
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
            </form>
          </Container>
        </ThemeProvider>
      )}
    </Formik>
  );
}
