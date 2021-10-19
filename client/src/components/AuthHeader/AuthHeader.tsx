import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';

interface Props {
  linkTo: string;
  linkTo2: string;
  asideText: string;
  btnText: string;
  btnText2: string;
}

const AuthHeader = ({ linkTo, linkTo2, asideText, btnText, btnText2 }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Link to={linkTo} className={classes.link}>
        <Button color="secondary" className={classes.accBtn} variant="contained">
          {btnText}
        </Button>
      </Link>{' '}
      <Link to={linkTo2} className={classes.link}>
        <Button color="secondary" className={classes.accBtn} variant="contained">
          {btnText2}
        </Button>
      </Link>
    </Box>
  );
};

export default AuthHeader;
