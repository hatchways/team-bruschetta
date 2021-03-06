import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useHistory } from 'react-router-dom';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
        history.push('/dashboard');
      } else {
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid>
      <AuthHeader />
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
          <Box width="100%" maxWidth={750} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5" align="center">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Grid>
      </Grid>
    </Grid>
  );
}
