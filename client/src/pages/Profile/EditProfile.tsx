import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import editProfile from '../../helpers/APICalls/editProfile';
import { useProfile } from '../../context/useProfileContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { Profile } from '../../interface/Profile';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const { updateProfileContext } = useProfile();
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
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
        <EditProfileForm handleSubmit={handleSubmit} />
      </Box>
      <Box p={1} alignSelf="center" />
    </Grid>
  );
}
