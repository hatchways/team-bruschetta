import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import demoLogin from '../../helpers/APICalls/demoLogin';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import DemoLoginForm from './DemoLoginForm/DemoLoginForm';

export default function DemoUser(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: 'bruschetta@gmail.com'; password: 'password' },
    { setSubmitting }: FormikHelpers<{ email: 'bruschetta@gmail.com'; password: 'password' }>,
  ) => {
    demoLogin(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
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
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
          <Box width="100%" maxWidth={650} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5" align="center">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <DemoLoginForm handleSubmit={handleSubmit} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Grid>
      </Grid>
    </Grid>
  );
}
