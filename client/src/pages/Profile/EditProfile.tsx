import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import editProfile from '../../helpers/APICalls/editProfile';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import EditProfileForm from './EditProfileForm/EditProfileForm';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phone,
      address,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: number;
      email: string;
      phone: number;
      address: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: number;
      email: string;
      phone: number;
      address: string;
      description: string;
    }>,
  ) => {
    editProfile(firstName, lastName, gender, dateOfBirth, email, phone, address, description).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box width="100%" maxWidth={450} p={3} alignSelf="center">
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
          <EditProfileForm handleSubmit={handleSubmit} />
        </Box>
        <Box p={1} alignSelf="center" />
      </Grid>
    </Grid>
  );
}
