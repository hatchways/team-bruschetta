import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { User } from '../../interface/User';
import logo from '../../Images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import useStyles from './useStyles';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const DashHeader = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid elevation={6} component={Paper} spacing={3} square item className={classes.dashHeader}>
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <Box className={classes.links}>
        <Link to="/manage-bookings" className={classes.sittersLink}>
          <Typography className={classes.accAside}>My Sitters </Typography>
        </Link>
        <Typography className={classes.accAside}>Messages </Typography>
        <AvatarDisplay loggedIn user={loggedInUser} />
        <AuthMenu />
      </Box>
    </Grid>
  );
};
export default DashHeader;
