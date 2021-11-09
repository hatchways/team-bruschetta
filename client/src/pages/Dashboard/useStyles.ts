import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  dashboard: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sidebar: {
    paddingLeft: '4rem',
    paddingTop: '6rem',
  },
  links: {
    padding: '0.6rem 0',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  },
  links2: {
    padding: '0.6rem 0',
    textDecoration: 'none',
    color: '#aaa',
    fontWeight: 'bold',
  },
  navlink: {
    textDecoration: 'none',
  },
  drawerWrapper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
    marginTop: '2rem',
  },
}));

export default useStyles;
