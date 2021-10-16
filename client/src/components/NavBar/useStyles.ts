import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: 36,
      marginTop: 10,
    },
    logo: {
      maxWidth: 160,
      maxHeight: 40,
    },
    buttonGroup: {
      marginLeft: 'auto',
      marginRight: 35,
    },
    profilepic: {
      borderRadius: '50%',
      backgroundSize: 'cover',
      height: 50,
      marginRight: 40,
      marginLeft: 0,
    },
  }),
);

export default useStyles;
