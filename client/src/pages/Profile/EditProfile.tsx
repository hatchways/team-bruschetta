import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const EditProfile = () => {
  const classes = useStyles();
  return (
    <form>
      <TextField
        id="firstName"
        name="firstName"
        label={<Typography className={classes.label}>First Name</Typography>}
      />
      <TextField id="lastName" name="lastName" label={<Typography className={classes.label}>Last Name</Typography>} />
      <TextField id="gender" name="gender" label={<Typography className={classes.label}>Gender</Typography>} />
      <TextField id="dob" name="dob" label={<Typography className={classes.label}>Date of Birth</Typography>} />
      <TextField id="email" name="email" label={<Typography className={classes.label}>Email Address</Typography>} />
      <TextField id="phone" name="phone" label={<Typography className={classes.label}>Phone Number</Typography>} />
      <TextField
        id="address"
        name="address"
        label={<Typography className={classes.label}>Where You Live</Typography>}
      />
      <TextField id="about" name="about" label={<Typography className={classes.label}>Describe Yourself</Typography>} />
      <Button type="submit" className={classes.submit}>
        {' '}
        Save{' '}
      </Button>
    </form>
  );
};
export default EditProfile;
