import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '30vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    marginTop: '3%',
    paddingLeft: '28%',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 10,
    paddingTop: '3rem',
    color: '#000000',
    fontWeight: 900,
    fontFamily: "'Open Sans'",
    paddingLeft: '6%',
  },
}));

export default useStyles;
