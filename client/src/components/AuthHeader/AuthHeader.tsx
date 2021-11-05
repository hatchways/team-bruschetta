import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import logo from '../../Images/logo.png';

import useStyles from './useStyles';

const AuthHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Box className={classes.buttons}>
        <Typography className={classes.accAside}>Become a sitter </Typography>
        <Button component={Link} to="/login" color="secondary" className={classes.accBtn} variant="contained">
          Login
        </Button>
        <Button component={Link} to="/signup" color="secondary" className={classes.accBtn} variant="contained">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
export default AuthHeader;
