import { makeStyles, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

export default useStyles;
