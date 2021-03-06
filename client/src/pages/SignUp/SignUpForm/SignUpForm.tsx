import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { CircularProgress } from '@material-ui/core';

import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box className={classes.textField}>
            <InputLabel className={classes.inputLabel}> Username </InputLabel>
            <TextField
              id="username"
              label={<Typography className={classes.label}>Create a username</Typography>}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="username"
              autoComplete="username"
              autoFocus
              helperText={touched.username ? errors.username : ''}
              error={touched.username && Boolean(errors.username)}
              value={values.username}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <Box className={classes.textField}>
            <InputLabel className={classes.inputLabel}> Email Address </InputLabel>
            <TextField
              id="email"
              label={<Typography className={classes.label}>Your email address</Typography>}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="email"
              autoComplete="email"
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <Box className={classes.textField}>
            <InputLabel className={classes.inputLabel}> Password </InputLabel>
            <TextField
              id="password"
              label={<Typography className={classes.label}>Create a password</Typography>}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Sign up'}
            </Button>
            <Button
              component={Link}
              to="/demo-login"
              size="large"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Demo User Login'}
            </Button>
          </Box>
          <Box p={1} alignSelf="center" fontWeight="700" fontSize=".8rem">
            <Typography>
              Already a member?
              <Link to="/login"> Login </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
