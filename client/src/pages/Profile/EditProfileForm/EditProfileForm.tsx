import * as React from 'react';
import 'date-fns';
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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { CircularProgress } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      _id,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phone,
      address,
      description,
    }: {
      _id: string;
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: Date;
      email: string;
      phone: number;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      _id: string;
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: Date;
      email: string;
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

  const handleToggle = () => {
    setPhoneNumber(!phoneNumber);
  };

  return (
    <Formik
      initialValues={{
        _id: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: new Date(),
        email: '',
        phone: 0,
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is required').min(3, 'First Name must be at least 3 chars long'),
        lastName: Yup.string().required('Last Name is required').min(3, 'Last Name must be at least 3 chars long'),
        gender: Yup.string().required('Please select a gender'),
        dateOfBirth: Yup.date().required('Please enter a  date of birth'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        phone: Yup.number()
          .required('Please enter a phone number')
          .min(10, 'Phone Number must be at least 10 chars long'),
        address: Yup.string().required('Please enter an address'),
        description: Yup.string().required('Please enter a description'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, setFieldValue, values, touched, errors, isSubmitting }) => (
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
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && Boolean(errors.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
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
                  helperText={touched.lastName ? errors.lastName : ''}
                  error={touched.lastName && Boolean(errors.lastName)}
                  value={values.lastName}
                  onChange={handleChange}
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
                      error={touched.gender && Boolean(errors.gender)}
                      value={values.gender}
                      onChange={handleChange}
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
                <Grid item xs={12} sm={6} className={classes.dropdown}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      autoOk
                      id="dateOfBirth"
                      name="dateOfBirth"
                      label="Date of Birth"
                      inputVariant="outlined"
                      format="MM/dd/yyyy"
                      value={values.dateOfBirth}
                      onChange={(dateOfBirth, dateString) => setFieldValue('dateOfBirth', dateString)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
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
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
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
                      helperText={touched.phone ? errors.phone : ''}
                      error={touched.phone && Boolean(errors.phone)}
                      value={values.phone}
                      onChange={handleChange}
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
                    helperText={touched.address ? errors.address : ''}
                    error={touched.address && Boolean(errors.address)}
                    value={values.address}
                    onChange={handleChange}
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
                    value={values.description}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box textAlign="center">
                <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                </Button>
              </Box>
            </form>
          </Container>
        </ThemeProvider>
      )}
    </Formik>
  );
}
