import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      marginTop: '8rem',
    },
  }),
);

export default useStyles;
