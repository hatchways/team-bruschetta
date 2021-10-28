import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import editProfile from '../../helpers/APICalls/editProfile';
import { useSnackBar } from '../../context/useSnackbarContext';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { Profile } from '../../interface/Profile';
import { useAuth } from '../../context/useAuthContext';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser, updateProfileContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { _id, firstName, lastName, gender, dateOfBirth, email, phone, address, description }: Profile,
    { setSubmitting }: FormikHelpers<Profile>,
  ) => {
    editProfile(_id, firstName, lastName, gender, dateOfBirth, email, phone, address, description).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateProfileContext(data.success);
      } else {
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Box width="100%" maxWidth={1250} p={3} alignSelf="center">
        <EditProfileForm handleSubmit={handleSubmit} />
      </Box>
    </Grid>
  );
}
