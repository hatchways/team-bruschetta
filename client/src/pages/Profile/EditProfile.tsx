import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const EditProfile = () => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <div>
        <label className={classes.label}>
          First Name
          <input className={classes.inputs} id="firstName" name="firstName" />
        </label>
      </div>
      {/* <TextField id="lastName" name="lastName" label={<Typography className={classes.label}>Last Name</Typography>} /> */}
      <div>
        <label className={classes.label}>
          Last Name
          <input className={classes.inputs} id="lastName" name="lastName" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Gender
          <input className={classes.inputs} id="gender" name="gender" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Date of Birth
          <input className={classes.inputs} id="dob" name="dob" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Email Address
          <input className={classes.inputs} id="email" name="email" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Phone Number
          <input className={classes.inputs} id="phone" name="phone" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Where You Live
          <input className={classes.inputs} id="address" name="address" />
        </label>
      </div>
      <div>
        <label className={classes.label}>
          Describe Yourself
          <textarea className={classes.inputs} id="description" name="description" />
        </label>
      </div>
      <Button type="submit" className={classes.submit}>
        {' '}
        Save{' '}
      </Button>
    </form>
  );
};
export default EditProfile;
